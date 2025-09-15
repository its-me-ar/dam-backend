import dotenv from "dotenv";
import logger from "./config/logger";
import connection from "./config/redis";

// Load environment variables
dotenv.config();

async function startBullMQApp() {
	try {
		logger.info("🚀 Starting Bull MQ Application...");

		// Test Redis connection
		await connection.ping();
		logger.info("✅ Redis connection established");

		logger.info("📊 Bull MQ Application is monitoring queues:");
		logger.info("   - video-processing");
		logger.info("   - video-upload");
		logger.info("   - video-thumbnail");

		// Keep the process alive
		process.on("SIGINT", async () => {
			logger.info("🛑 Shutting down Bull MQ Application...");
			await connection.quit();
			process.exit(0);
		});

		process.on("SIGTERM", async () => {
			logger.info("🛑 Shutting down Bull MQ Application...");
			await connection.quit();
			process.exit(0);
		});

		logger.info("🎉 Bull MQ Application is running and monitoring queues!");
	} catch (error) {
		logger.error("❌ Failed to start Bull MQ Application:", error);
		process.exit(1);
	}
}

startBullMQApp();
