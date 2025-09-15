import fs from "fs";
import path from "path";
import { Worker } from "bullmq";
import sharp from "sharp";
import axios from "axios";
import { S3Service } from "../services/S3Service";
import connection from "../config/redis";
import logger from "../config/logger";
import { upsertImageMetadata } from "../utils/upsertImageMetadata";
import { PrismaClient, JobStatus } from "../../generated/prisma";

interface ImageThumbnailJobData {
	asset_id: string;
	localPath: string;
	storagePath: string;
}

const s3Service = new S3Service();
const prisma = new PrismaClient();

const imageThumbnailWorker = new Worker<ImageThumbnailJobData>(
	"image-thumbnail",
	async job => {
		const { asset_id, localPath, storagePath } = job.data;
		logger.info(
			`[ImageThumbnailWorker] 🚀 Generating thumbnail for asset_id=${asset_id}`,
		);

		// Create main transcoding job record
		await prisma.transcodingJob.upsert({
			where: { job_id: String(job.id) },
			update: {
				status: JobStatus.ACTIVE,
				worker_name: "image-thumbnail",
				event_name: "active",
			},
			create: {
				asset_id,
				job_id: String(job.id),
				status: JobStatus.ACTIVE,
				worker_name: "image-thumbnail",
				event_name: "active",
			},
		});

		try {
			// 1. Create thumbnail
			const tmpThumbnail = `/tmp/${asset_id}-thumbnail.jpg`;
			await sharp(localPath).resize({ width: 320 }).jpeg().toFile(tmpThumbnail);

			const thumbStats = fs.statSync(tmpThumbnail);
			const thumbMeta = await sharp(tmpThumbnail).metadata();

			const thumbnailMetadata = {
				width: thumbMeta.width || 0,
				height: thumbMeta.height || 0,
				size: thumbStats.size,
			};

			logger.info(
				`[ImageThumbnailWorker] 📊 Thumbnail metadata: ${JSON.stringify(
					thumbnailMetadata,
				)}`,
			);

			// 2. Upload thumbnail
			const parsedPath = path.parse(storagePath);
			const thumbKey = path.join(
				parsedPath.dir,
				`${parsedPath.name}-thumbnail.jpg`,
			);
			const presignedUrl = await s3Service.getPresignedUploadUrl(
				thumbKey,
				3600,
			);

			const fileBuffer = fs.readFileSync(tmpThumbnail);
			await axios.put(presignedUrl, fileBuffer, {
				headers: { "Content-Type": "image/jpeg" },
				maxContentLength: Infinity,
				maxBodyLength: Infinity,
			});

			logger.info(
				`[ImageThumbnailWorker] 📤 Uploaded thumbnail to ${thumbKey}`,
			);

			// 3. Save thumbnail metadata
			await upsertImageMetadata(
				asset_id,
				"thumbnail",
				thumbKey,
				thumbnailMetadata,
			);

			// Cleanup
			fs.unlinkSync(tmpThumbnail);
			if (fs.existsSync(localPath)) {
				fs.unlinkSync(localPath); // also clean original input now
				logger.debug(
					`[ImageThumbnailWorker] 🧹 Cleaned up local input ${localPath}`,
				);
			}

			logger.info(
				`[ImageThumbnailWorker] ✅ Thumbnail generated and uploaded for asset_id=${asset_id}`,
			);
		} catch (err: unknown) {
			let message = "Unknown error";
			if (err instanceof Error) {
				message = err.message;
			}

			logger.error(
				`[ImageThumbnailWorker] 💥 Job ${job.id} for asset_id=${asset_id} failed: ${message}`,
			);
			throw err;
		}
	},
	{ connection },
);

imageThumbnailWorker.on("active", job => {
	if (!job) {return;}
	const { asset_id } = job.data;
	logger.debug(`[ImageThumbnailWorker] 🔄 Job ${job.id} started for asset_id=${asset_id}`);
	prisma.transcodingJob
		.updateMany({
			where: { 
				asset_id,
				worker_name: "image-thumbnail"
			},
			data: { 
				status: JobStatus.ACTIVE,
				event_name: "active"
			},
		})
		.catch(() => {});
});

imageThumbnailWorker.on("completed", job => {
	if (!job) {return;}
	const { asset_id } = job.data;
	logger.info(`[ImageThumbnailWorker] ✅ Job ${job.id} completed for asset_id=${asset_id}`);
	prisma.transcodingJob
		.updateMany({
			where: { 
				asset_id,
				worker_name: "image-thumbnail"
			},
			data: { 
				status: JobStatus.COMPLETED,
				event_name: "completed"
			},
		})
		.catch(() => {});
});

imageThumbnailWorker.on("failed", (job, err) => {
	if (!job) {return;}
	const { asset_id } = job.data;
	logger.error(`[ImageThumbnailWorker] ❌ Job ${job.id} failed for asset_id=${asset_id}: ${err.message}`);
	prisma.transcodingJob
		.updateMany({
			where: { 
				asset_id,
				worker_name: "image-thumbnail"
			},
			data: { 
				status: JobStatus.FAILED,
				event_name: "failed"
			},
		})
		.catch(() => {});
});

export default imageThumbnailWorker;
