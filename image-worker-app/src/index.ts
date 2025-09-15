import dotenv from "dotenv";
import logger from "./config/logger";
import { closeRedisConnection } from "./config/redis";
import imageWorker from "./workers/image.worker";
import imageThumbnailWorker from "./workers/imageThumbnail.worker";
import { imageQueue } from "./queues/image.queue";
import IORedis from "ioredis";

// Load environment variables
dotenv.config();

// Event-driven architecture - listen to Redis events

// Create separate Redis connection for pub/sub
const connection = new IORedis({
	host: process.env.REDIS_HOST || "127.0.0.1",
	port: Number(process.env.REDIS_PORT) || 6379,
	maxRetriesPerRequest: null,
	enableReadyCheck: false,
});

// Listen for image job events from BullMQ app
connection.subscribe("image_worker_events", (err, count) => {
	if (err) {
		logger.error("❌ Error subscribing to image_worker_events:", err);
		return;
	}
	logger.info(`📡 Subscribed to image_worker_events channel (${count} subscribers)`);
});

// Handle incoming image job events
connection.on("message", async (channel, message) => {
	if (channel === "image_worker_events") {
		try {
			const event = JSON.parse(message);
			await handleImageJobEvent(event);
		} catch (error) {
			logger.error("❌ Error processing image job event:", error);
		}
	}
});

/**
 * Handle image job events from BullMQ app
 */
async function handleImageJobEvent(event: any) {
	const { type, data } = event;
	
	if (type === "image_job") {
		const { asset_id, storage_path } = data;
		
		logger.info(`📥 Received image job event for asset: ${asset_id}`);

		// Add job to the image queue
		await imageQueue.add("process-image", {
			asset_id,
			storage_path,
		});

		logger.info(`✅ Image job queued for asset: ${asset_id}`);
	}
}

async function startImageWorkerApp() {
	try {
		logger.info("🚀 Starting Image Worker Application...");

		// Test Redis connection
		await connection.ping();
		logger.info("[Redis] Connected to Redis ✅");

		// Initialize workers
		await Promise.all([
			imageWorker.waitUntilReady(),
			imageThumbnailWorker.waitUntilReady(),
		]);

		logger.info("✅ All image workers initialized successfully");

		// Log worker status
		logger.info("👷 Workers running:");
		logger.info("   - Image Processing Worker: image-processing");
		logger.info("   - Image Thumbnail Worker: image-thumbnail");

		logger.info("🎉 Image Worker Application is running and ready to process jobs!");

		// Graceful shutdown
		process.on("SIGINT", async () => {
			logger.info("🛑 Shutting down Image Worker Application...");
			await Promise.all([
				imageWorker.close(),
				imageThumbnailWorker.close(),
			]);
			await connection.quit();
			process.exit(0);
		});

		process.on("SIGTERM", async () => {
			logger.info("🛑 Shutting down Image Worker Application...");
			await Promise.all([
				imageWorker.close(),
				imageThumbnailWorker.close(),
			]);
			await connection.quit();
			process.exit(0);
		});

	} catch (error) {
		logger.error("❌ Failed to start Image Worker Application:", error);
		process.exit(1);
	}
}

// Start the application
startImageWorkerApp();
