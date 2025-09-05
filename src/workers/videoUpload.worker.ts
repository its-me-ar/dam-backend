import { Worker } from "bullmq";
import fs from "fs";
import axios from "axios";
import connection from "src/config/redis";
import logger from "src/config/logger";

interface UploadJobData {
	asset_id: string;
	resolution: number;
	presignedUrl: string;
	localPath: string;
	s3Key: string; // pass the final S3 key from transcoding worker
}

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
			if (err instanceof Error) {message = err.message;}
			logger.error(
				`[UploadWorker] ❌ Upload failed for ${localPath}: ${message}`,
			);
			throw err; // so BullMQ marks the job as failed
		}
	},
	{ connection },
);

// Worker lifecycle events
videoUploadWorker.on("active", job =>
	logger.debug(`[UploadWorker] 🔄 Job ${job.id} started`),
);
videoUploadWorker.on("completed", job =>
	logger.info(`[UploadWorker] ✅ Job ${job.id} completed`),
);
videoUploadWorker.on("failed", (job, err) =>
	logger.error(`[UploadWorker] ❌ Job ${job?.id} failed: ${err.message}`),
);

export default videoUploadWorker;
