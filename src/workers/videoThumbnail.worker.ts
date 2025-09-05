import fs from "fs";
import path from "path";
import { Worker } from "bullmq";
import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import ffprobePath from "ffprobe-static";
import axios from "axios";
import { S3Service } from "src/services/S3Service";
import connection from "src/config/redis";
import logger from "src/config/logger";
import { upsertVideoMetadata } from "src/utils/upsertVideoMetadata";

// Ensure ffmpeg binary is available
if (!ffmpegPath) {
	throw new Error(
		"FFmpeg binary not found. Make sure ffmpeg-static is installed.",
	);
}

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath.path);

const s3Service = new S3Service();

interface ThumbnailJobData {
	asset_id: string;
	localPath: string; // path to original video
	storagePath: string; // original S3 key (used to build thumbnail S3 key)
}

const videoThumbnailWorker = new Worker<ThumbnailJobData>(
	"video-thumbnail",
	async job => {
		const { asset_id, localPath, storagePath } = job.data;
		logger.info(
			`[ThumbnailWorker] 🚀 Generating thumbnail for asset_id=${asset_id}`,
		);

		const parsedPath = path.parse(storagePath);
		const tmpThumbnail = `/tmp/${asset_id}-thumbnail.jpg`;

		try {
			// Generate thumbnail using ffmpeg
			await new Promise<void>((resolve, reject) => {
				ffmpeg(localPath)
					.screenshots({
						timestamps: ["50%"],
						filename: path.basename(tmpThumbnail),
						folder: path.dirname(tmpThumbnail),
						size: "320x?", // width 320px, height auto
					})
					.on("end", () => resolve())
					.on("error", err => reject(err));
			});

			logger.info(
				`[ThumbnailWorker] ✅ Thumbnail generated at ${tmpThumbnail}`,
			);

			// Read thumbnail file
			const fileBuffer = await fs.promises.readFile(tmpThumbnail);

			// Upload thumbnail to S3 using axios.put
			const thumbnailKey = path.join(
				parsedPath.dir,
				`${parsedPath.name}-thumbnail.jpg`,
			);
			const presignedUrl = await s3Service.getPresignedUploadUrl(
				thumbnailKey,
				3600,
			);

			await axios.put(presignedUrl, fileBuffer, {
				headers: { "Content-Type": "image/jpeg" },
				maxContentLength: Infinity,
				maxBodyLength: Infinity,
			});

			logger.info(`[ThumbnailWorker] 📤 Uploaded thumbnail to ${thumbnailKey}`);

			// Save metadata
			await upsertVideoMetadata(asset_id, "thumbnail", thumbnailKey, {
				width: 320,
				height: 180, // approximate height
				size: fileBuffer.length,
			});

			// Cleanup temp file
			fs.unlinkSync(tmpThumbnail);
			logger.debug(
				`[ThumbnailWorker] 🧹 Cleaned up local thumbnail ${tmpThumbnail}`,
			);
		} catch (err: unknown) {
			let message = "Unknown error";
			if (err instanceof Error) {message = err.message;}

			logger.error(
				`[ThumbnailWorker] ❌ Failed for asset_id=${asset_id}: ${message}`,
			);
			throw err;
		}
	},
	{ connection },
);

export default videoThumbnailWorker;
