import dotenv from "dotenv";
import logger from "./config/logger";
import connection from "./config/redis";
import imageWorker from "./workers/image.worker";
import imageThumbnailWorker from "./workers/imageThumbnail.worker";

// Load environment variables
dotenv.config();

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
