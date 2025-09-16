import { Worker } from "bullmq";
import fs from "fs";
import axios from "axios";
import { getQueueConnection } from "../config/redis";
import logger from "../config/logger";
import { PrismaClient, JobStatus } from "../../generated/prisma";

interface UploadJobData {
	asset_id: string;
	resolution: number;
	presignedUrl: string;
	localPath: string;
	s3Key: string; // pass the final S3 key from transcoding worker
}

const prisma = new PrismaClient();

const videoUploadWorker = new Worker<UploadJobData>(
	"video-upload",
	async job => {
		const { asset_id, resolution, presignedUrl, localPath, s3Key } = job.data;

		logger.info(
			`[UploadWorker] 🚀 Starting upload for asset_id=${asset_id}, resolution=${resolution}p`,
		);

		try {
			// Read the file
			const fileBuffer = await fs.promises.readFile(localPath);

			// Upload via presigned URL
			await axios.put(presignedUrl, fileBuffer, {
				headers: { "Content-Type": "video/mp4" },
				maxContentLength: Infinity,
				maxBodyLength: Infinity,
			});

			logger.info(`[UploadWorker] ✅ Uploaded ${localPath} to S3 as ${s3Key}`);

			logger.debug(
				`[UploadWorker] 💾 Saved S3 path in AssetMetadata: resolution_${resolution} -> ${s3Key}`,
			);

			// Clean up local file
			fs.unlinkSync(localPath);
			logger.debug(`[UploadWorker] 🧹 Cleaned up local file ${localPath}`);
		} catch (err: unknown) {
			let message = "Unknown error";
			if (err instanceof Error) {
				message = err.message;
			}
			logger.error(
				`[UploadWorker] ❌ Upload failed for ${localPath}: ${message}`,
			);
			throw err; // so BullMQ marks the job as failed
		}
	},
	{ connection: getQueueConnection() },
);

// Worker lifecycle events
videoUploadWorker.on("active", async job => {
	logger.debug(`[UploadWorker] 🔄 Job ${job.id} started`);
	try {
		await prisma.transcodingJob.update({
			where: { job_id: String(job.id) },
			data: {
				status: JobStatus.ACTIVE,
				worker_name: "video-upload",
				event_name: "active",
				updated_at: new Date(),
			},
		});
		logger.debug(`[UploadWorker] ✅ Job ${job.id} status updated to ACTIVE in database`);
	} catch (error) {
		logger.error(`[UploadWorker] ❌ Failed to update job ${job.id} status in database:`, error);
	}
});
videoUploadWorker.on("completed", async job => {
	logger.info(`[UploadWorker] ✅ Job ${job.id} completed`);
	try {
		await prisma.transcodingJob.update({
			where: { job_id: String(job.id) },
			data: {
				status: JobStatus.COMPLETED,
				worker_name: "video-upload",
				event_name: "completed",
				updated_at: new Date(),
			},
		});
		logger.info(`[UploadWorker] ✅ Job ${job.id} status updated to COMPLETED in database`);
	} catch (error) {
		logger.error(`[UploadWorker] ❌ Failed to update job ${job.id} status in database:`, error);
	}
});
videoUploadWorker.on("failed", async (job, err) => {
	logger.error(`[UploadWorker] ❌ Job ${job?.id} failed: ${err.message}`);
	try {
		await prisma.transcodingJob.update({
			where: { job_id: String(job?.id) },
			data: {
				status: JobStatus.FAILED,
				worker_name: "video-upload",
				event_name: "failed",
				updated_at: new Date(),
			},
		});
		logger.info(`[UploadWorker] ✅ Job ${job?.id} status updated to FAILED in database`);
	} catch (error) {
		logger.error(`[UploadWorker] ❌ Failed to update job ${job?.id} status in database:`, error);
	}
});

export default videoUploadWorker;
