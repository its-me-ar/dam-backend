import { Worker } from "bullmq";
import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import ffprobePath from "ffprobe-static";
import path from "path";
import fs from "fs";
import { S3Service } from "src/services/S3Service";
import connection from "src/config/redis";
import logger from "src/config/logger";
import { extractVideoMetadata } from "src/utils/extractVideoMetadata";
import { upsertVideoMetadata } from "src/utils/upsertVideoMetadata";
import { thumbnailQueue, uploadQueue } from "src/queues/video.queue";
import { PrismaClient, JobStatus } from "generated/prisma";

interface TranscodeJobData {
	asset_id: string;
	storage_path: string;
}

const s3Service = new S3Service();
const prisma = new PrismaClient();

if (!ffmpegPath) {
	throw new Error(
		"FFmpeg binary not found. Make sure ffmpeg-static is installed.",
	);
}

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath.path);

const videoWorker = new Worker<TranscodeJobData>(
	"video-processing",
	async job => {
		const { asset_id, storage_path } = job.data;
		logger.info(`[Worker] 🚀 Received job ${job.id} for asset_id=${asset_id}`);

		try {
			// 1. Download original video from S3
			const localInput = `/tmp/${asset_id}-input.mp4`;
			logger.info(
				`[Worker] ⬇️ Downloading from S3: ${storage_path} -> ${localInput}`,
			);
			await s3Service.downloadToFile(storage_path, localInput);

			// 2. Extract metadata for original video
			const originalMetadata = await extractVideoMetadata(localInput);
			logger.info(
				`[Worker] 📊 Original video metadata: ${JSON.stringify(
					originalMetadata,
				)}`,
			);

			// 3. Save original metadata
			await upsertVideoMetadata(
				asset_id,
				"original",
				storage_path,
				originalMetadata,
			);

			// 4. Enqueue thumbnail generation job
			const thumbJob = await thumbnailQueue.add("generate-thumbnail", {
				asset_id,
				localPath: localInput,
				storagePath: storage_path,
			});
			
			// Create transcoding job record with unique job_id
			await prisma.transcodingJob.upsert({
				where: { job_id: String(thumbJob.id) },
				update: {
					status: JobStatus.PENDING,
					worker_name: "video-thumbnail",
					event_name: "enqueued",
				},
				create: {
					asset_id,
					job_id: String(thumbJob.id),
					status: JobStatus.PENDING,
					worker_name: "video-thumbnail",
					event_name: "enqueued",
				},
			});
			logger.info(
				`[Worker] 🖼️ Enqueued thumbnail generation for asset_id=${asset_id}`,
			);

			// 5. Transcode video to multiple resolutions
			const parsedPath = path.parse(storage_path);
			const resolutions = [720, 480];

			for (const res of resolutions) {
				const outputFile = `/tmp/${asset_id}-${res}p.mp4`;
				logger.info(`[Worker] 🎬 Starting transcode to ${res}p`);

				await new Promise<void>((resolve, reject) => {
					ffmpeg(localInput)
						.size(`?x${res}`)
						.output(outputFile)
						.on("end", () => {
							logger.info(`[Worker] ✅ Finished transcoding to ${res}p`);
							resolve();
						})
						.on("error", err => {
							logger.error(
								`[Worker] ❌ Error transcoding to ${res}p: ${err.message}`,
							);
							reject(err);
						})
						.run();
				});

				// Extract metadata for transcoded video
				const transcodedMetadata = await extractVideoMetadata(outputFile);
				logger.info(
					`[Worker] 📊 Transcoded video (${res}p) metadata: ${JSON.stringify(
						transcodedMetadata,
					)}`,
				);

				const outputKey = path.join(
					parsedPath.dir,
					`${parsedPath.name}-${res}.mp4`,
				);
				const presignedUrl = await s3Service.getPresignedUploadUrl(
					outputKey,
					3600,
				);

				// Enqueue upload job
				const uploadJob = await uploadQueue.add("upload", {
					asset_id,
					resolution: res,
					presignedUrl,
					localPath: outputFile,
					s3Key: outputKey,
				});
				
				// Create transcoding job record with unique job_id
				await prisma.transcodingJob.upsert({
					where: { job_id: String(uploadJob.id) },
					update: {
						status: JobStatus.PENDING,
						worker_name: "video-upload",
						event_name: "enqueued",
					},
					create: {
						asset_id,
						job_id: String(uploadJob.id),
						status: JobStatus.PENDING,
						worker_name: "video-upload",
						event_name: "enqueued",
					},
				});

				// Save transcoded metadata
				await upsertVideoMetadata(
					asset_id,
					`${res}p`,
					outputKey,
					transcodedMetadata,
				);

				logger.info(
					`[Worker] 📤 Enqueued upload job for ${outputFile} -> ${outputKey}`,
				);
			}

			// Cleanup input file
			fs.unlinkSync(localInput);
			logger.debug(`[Worker] 🧹 Cleaned up local input ${localInput}`);
			logger.info(
				`[Worker] 🎉 Job ${job.id} for asset_id=${asset_id} completed successfully`,
			);
		} catch (err: unknown) {
			let message = "Unknown error";
			if (err instanceof Error) {
				message = err.message;
			}

			logger.error(
				`[Worker] 💥 Job ${job.id} for asset_id=${asset_id} failed: ${message}`,
			);
			throw err;
		}
	},
	{ connection },
);

videoWorker.on("active", job => {
	if (!job) {return;}
	const { asset_id } = job.data;
	logger.debug(`[Worker] 🔄 Job ${job.id} started for asset_id=${asset_id}`);
	prisma.transcodingJob
		.updateMany({
			where: { 
				asset_id,
				worker_name: "video-processing"
			},
			data: { 
				status: JobStatus.ACTIVE,
				event_name: "active"
			},
		})
		.catch(() => {});
});

videoWorker.on("completed", job => {
	if (!job) {return;}
	const { asset_id } = job.data;
	logger.info(`[Worker] ✅ Job ${job.id} completed for asset_id=${asset_id}`);
	prisma.transcodingJob
		.updateMany({
			where: { 
				asset_id,
				worker_name: "video-processing"
			},
			data: { 
				status: JobStatus.COMPLETED,
				event_name: "completed"
			},
		})
		.catch(() => {});
});

videoWorker.on("failed", (job, err) => {
	if (!job) {return;}
	const { asset_id } = job.data;
	logger.error(`[Worker] ❌ Job ${job.id} failed for asset_id=${asset_id}: ${err.message}`);
	prisma.transcodingJob
		.updateMany({
			where: { 
				asset_id,
				worker_name: "video-processing"
			},
			data: { 
				status: JobStatus.FAILED,
				event_name: "failed"
			},
		})
		.catch(() => {});
});

export default videoWorker;
