import { Worker } from "bullmq";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import axios from "axios";
import { S3Service } from "src/services/S3Service";
import connection from "src/config/redis";
import logger from "src/config/logger";
import { upsertImageMetadata } from "src/utils/upsertImageMetadata";
import { PrismaClient, JobStatus } from "generated/prisma";

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
			if (err instanceof Error) {message = err.message;}

			logger.error(
				`[ImageThumbnailWorker] ❌ Job ${job.id} failed: ${message}`,
			);
			throw err;
		}
	},
	{ connection },
);

imageThumbnailWorker.on("active", job =>
	prisma.transcodingJob.update({
		where: { job_id: String(job.id) },
		data: { status: JobStatus.ACTIVE, worker_name: "image-thumbnail", event_name: "active" },
	}).catch(() => {}),
);
imageThumbnailWorker.on("completed", job => {
	prisma.transcodingJob
		.update({
			where: { job_id: String(job.id) },
			data: { status: JobStatus.COMPLETED, worker_name: "image-thumbnail", event_name: "completed" },
		})
		.catch(() => {});

});
imageThumbnailWorker.on("failed", (job, _err) =>
	prisma.transcodingJob.update({
		where: { job_id: String(job?.id) },
		data: { status: JobStatus.FAILED, worker_name: "image-thumbnail", event_name: "failed" },
	}).catch(() => {}),
);

export default imageThumbnailWorker;
