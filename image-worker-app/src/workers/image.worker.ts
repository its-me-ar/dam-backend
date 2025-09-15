import { Worker } from "bullmq";
import sharp from "sharp";
import fs from "fs";
import { S3Service } from "../services/S3Service";
import connection from "../config/redis";
import logger from "../config/logger";
import { imageThumbnailQueue } from "../queues/image.queue";
import { upsertImageMetadata } from "../utils/upsertImageMetadata";
import { PrismaClient, JobStatus } from "../../generated/prisma";

interface ImageJobData {
	asset_id: string;
	storage_path: string;
}

const s3Service = new S3Service();
const prisma = new PrismaClient();

const imageWorker = new Worker<ImageJobData>(
	"image-processing",
	async job => {
		const { asset_id, storage_path } = job.data;
		logger.info(
			`[ImageWorker] 🚀 Received job ${job.id} for asset_id=${asset_id}`,
		);

		// Create main transcoding job record
		await prisma.transcodingJob.upsert({
			where: { job_id: String(job.id) },
			update: {
				status: JobStatus.ACTIVE,
				worker_name: "image-processing",
				event_name: "active",
			},
			create: {
				asset_id,
				job_id: String(job.id),
				status: JobStatus.ACTIVE,
				worker_name: "image-processing",
				event_name: "active",
			},
		});

		try {
			// 1. Download original image
			const localInput = `/tmp/${asset_id}-input`;
			logger.info(
				`[ImageWorker] ⬇️ Downloading from S3: ${storage_path} -> ${localInput}`,
			);
			await s3Service.downloadToFile(storage_path, localInput);

			// 2. Extract metadata
			const image = sharp(localInput);
			const metadata = await image.metadata();
			const stats = fs.statSync(localInput);

			const originalMetadata = {
				width: metadata.width || 0,
				height: metadata.height || 0,
				size: stats.size,
			};

			logger.info(
				`[ImageWorker] 📊 Original image metadata: ${JSON.stringify(
					originalMetadata,
				)}`,
			);

			// 3. Save original metadata
			await upsertImageMetadata(
				asset_id,
				"original",
				storage_path,
				originalMetadata,
			);

			// 4. Enqueue thumbnail generation
			const thumbJob = await imageThumbnailQueue.add("generate-thumbnail", {
				asset_id,
				localPath: localInput,
				storagePath: storage_path,
			});
			
			// Create transcoding job record with unique job_id
			await prisma.transcodingJob.upsert({
				where: { job_id: String(thumbJob.id) },
				update: {
					status: JobStatus.PENDING,
					worker_name: "image-thumbnail",
					event_name: "enqueued",
				},
				create: {
					asset_id,
					job_id: String(thumbJob.id),
					status: JobStatus.PENDING,
					worker_name: "image-thumbnail",
					event_name: "enqueued",
				},
			});
			logger.info(
				`[ImageWorker] 🖼️ Enqueued thumbnail generation for asset_id=${asset_id}`,
			);

			// Don't cleanup input file here - let thumbnail worker handle it
			logger.info(
				`[ImageWorker] 🎉 Job ${job.id} for asset_id=${asset_id} completed successfully`,
			);
		} catch (err: unknown) {
			let message = "Unknown error";
			if (err instanceof Error) {
				message = err.message;
			}

			logger.error(
				`[ImageWorker] 💥 Job ${job.id} for asset_id=${asset_id} failed: ${message}`,
			);
			throw err;
		}
	},
	{ connection },
);

imageWorker.on("active", job => {
	if (!job) {return;}
	const { asset_id } = job.data;
	logger.debug(`[ImageWorker] 🔄 Job ${job.id} started for asset_id=${asset_id}`);
	prisma.transcodingJob
		.updateMany({
			where: { 
				asset_id,
				worker_name: "image-processing"
			},
			data: { 
				status: JobStatus.ACTIVE,
				event_name: "active"
			},
		})
		.catch(() => {});
});

imageWorker.on("completed", job => {
	if (!job) {return;}
	const { asset_id } = job.data;
	logger.info(`[ImageWorker] ✅ Job ${job.id} completed for asset_id=${asset_id}`);
	prisma.transcodingJob
		.updateMany({
			where: { 
				asset_id,
				worker_name: "image-processing"
			},
			data: { 
				status: JobStatus.COMPLETED,
				event_name: "completed"
			},
		})
		.catch(() => {});
});

imageWorker.on("failed", (job, err) => {
	if (!job) {return;}
	const { asset_id } = job.data;
	logger.error(`[ImageWorker] ❌ Job ${job.id} failed for asset_id=${asset_id}: ${err.message}`);
	prisma.transcodingJob
		.updateMany({
			where: { 
				asset_id,
				worker_name: "image-processing"
			},
			data: { 
				status: JobStatus.FAILED,
				event_name: "failed"
			},
		})
		.catch(() => {});
});

export default imageWorker;
