import dotenv from "dotenv";
import logger from "./config/logger";
import videoWorker from "./workers/video.worker";
import videoThumbnailWorker from "./workers/videoThumbnail.worker";
import videoUploadWorker from "./workers/videoUpload.worker";

// Load environment variables
dotenv.config();

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
			process.exit(0);
		});

		process.on("SIGTERM", async () => {
			logger.info("🛑 Shutting down Video Worker Application...");
			await videoWorker.close();
			await videoThumbnailWorker.close();
			await videoUploadWorker.close();
			process.exit(0);
		});

		logger.info("🎉 Video Worker Application is running and ready to process jobs!");
	} catch (error) {
		logger.error("❌ Failed to start Video Worker Application:", error);
		process.exit(1);
	}
}

startVideoWorkerApp();
