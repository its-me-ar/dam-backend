import dotenv from "dotenv";
import logger from "./config/logger";
import videoWorker from "./workers/video.worker";
import videoThumbnailWorker from "./workers/videoThumbnail.worker";
import videoUploadWorker from "./workers/videoUpload.worker";
import { videoQueue } from "./queues/video.queue";
import { getPubSubConnection, closeRedisConnection } from "./config/redis";

// Load environment variables
dotenv.config();

// Get Redis connection for pub/sub
const connection = getPubSubConnection();

// Listen for video job events from BullMQ app
connection.subscribe("video_worker_events", (err, count) => {
	if (err) {
		logger.error("❌ Error subscribing to video_worker_events:", err);
		return;
	}
	logger.info(
		`📡 Subscribed to video_worker_events channel (${count} subscribers)`,
	);
});

// Handle incoming video job events
connection.on("message", async (channel, message) => {
	if (channel === "video_worker_events") {
		try {
			const event = JSON.parse(message);
			await handleVideoJobEvent(event);
		} catch (error) {
			logger.error("❌ Error processing video job event:", error);
		}
	}
});

/**
 * Handle video job events from BullMQ app
 */
async function handleVideoJobEvent(event: any) {
	const { type, data } = event;

	if (type === "video_job") {
		const { asset_id, storage_path } = data;

		logger.info(`📥 Received video job event for asset: ${asset_id}`);

		// Add job to the video queue
		await videoQueue.add("transcode", {
			asset_id,
			storage_path,
		});

		logger.info(`✅ Video job queued for asset: ${asset_id}`);
	}
}

async function startVideoWorkerApp() {
	try {
		logger.info("🚀 Starting Video Worker Application...");

		// Initialize all workers
		await videoWorker.waitUntilReady();
		await videoThumbnailWorker.waitUntilReady();
		await videoUploadWorker.waitUntilReady();

		logger.info("✅ All video workers initialized successfully");
		logger.info("👷 Workers running:");
		logger.info(`   - Video Processing Worker: ${videoWorker.name}`);
		logger.info(`   - Video Thumbnail Worker: ${videoThumbnailWorker.name}`);
		logger.info(`   - Video Upload Worker: ${videoUploadWorker.name}`);

		// Keep the process alive
		process.on("SIGINT", async () => {
			logger.info("🛑 Shutting down Video Worker Application...");
			await videoWorker.close();
			await videoThumbnailWorker.close();
			await videoUploadWorker.close();
			await closeRedisConnection();
			process.exit(0);
		});

		process.on("SIGTERM", async () => {
			logger.info("🛑 Shutting down Video Worker Application...");
			await videoWorker.close();
			await videoThumbnailWorker.close();
			await videoUploadWorker.close();
			await closeRedisConnection();
			process.exit(0);
		});

		logger.info(
			"🎉 Video Worker Application is running and ready to process jobs!",
		);
	} catch (error) {
		logger.error("❌ Failed to start Video Worker Application:", error);
		process.exit(1);
	}
}

startVideoWorkerApp();
