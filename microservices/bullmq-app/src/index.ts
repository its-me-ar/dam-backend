import dotenv from "dotenv";
import logger from "./config/logger";
import { getPubSubConnection, closeRedisConnection } from "./config/redis";
import { queueService } from "./services";
import { RedisMessage } from "./types/job.types";

// Load environment variables
dotenv.config();

// Event-driven architecture - no HTTP endpoints needed

async function startBullMQApp() {
	try {
		logger.info("🚀 Starting Bull MQ Application...");

		// Get Redis connections
		const pubSubConnection = getPubSubConnection();
		
		// Test Redis connections
		await pubSubConnection.ping();
		logger.info("✅ Redis connections established");

		// Listen for jobs from main app
		pubSubConnection.subscribe("bullmq_jobs", (err: any, count: any) => {
			if (err) {
				logger.error("❌ Error subscribing to bullmq_jobs:", err);
				return;
			}
			logger.info(`📡 Subscribed to bullmq_jobs channel (${count} subscribers)`);
		});

		// Handle incoming jobs
		pubSubConnection.on("message", async (channel: any, message: any) => {
			if (channel === "bullmq_jobs") {
				try {
					const job = JSON.parse(message);
					await handleJob(job);
				} catch (error) {
					logger.error("❌ Error processing job:", error);
				}
			}
		});

		logger.info("📊 Bull MQ Application is ready to receive jobs:");
		logger.info("   - video job events");
		logger.info("   - image job events");

		// Keep the process alive
		process.on("SIGINT", async () => {
			logger.info("🛑 Shutting down Bull MQ Application...");
			await closeRedisConnection(); // Close all connections
			process.exit(0);
		});

		process.on("SIGTERM", async () => {
			logger.info("🛑 Shutting down Bull MQ Application...");
			await closeRedisConnection(); // Close all connections
			process.exit(0);
		});

		logger.info("🎉 Bull MQ Application is running and ready to process jobs!");
	} catch (error) {
		logger.error("❌ Failed to start Bull MQ Application:", error);
		process.exit(1);
	}
}

/**
 * Handle incoming job and forward to appropriate worker app
 */
async function handleJob(job: RedisMessage) {
	const { type, data } = job;
	
	try {
		if (type === "video_processing") {
			logger.info(`🎬 Processing video job for ${data.asset_id}`);
			
			// Add job to video queue using service
			await queueService.addVideoJob({
				asset_id: data.asset_id,
				storage_path: data.storage_path,
			});
			
			// Forward to video worker app via events
			await forwardToWorker("video", data);
			
		} else if (type === "image_processing") {
			logger.info(`🖼️ Processing image job for ${data.asset_id}`);
			
			// Add job to image queue using service
			await queueService.addImageJob({
				asset_id: data.asset_id,
				storage_path: data.storage_path,
			});
			
			// Forward to image worker app via events
			await forwardToWorker("image", data);
			
		} else {
			logger.warn(`⚠️ Unknown job type: ${type}`);
		}
	} catch (error) {
		logger.error(`❌ Error handling ${type} job:`, error);
	}
}

/**
 * Forward job to worker application via Redis events
 */
async function forwardToWorker(workerType: string, data: any) {
	try {
		const event = {
			type: `${workerType}_job`,
			data: {
				...data,
				worker_type: workerType,
				timestamp: new Date().toISOString(),
			},
		};

		// Use service to publish job event
		await queueService.publishJobEvent(workerType, event);
	} catch (error) {
		logger.error(`❌ Failed to publish ${workerType} job event:`, error);
		// Job is still in queue, so it can be retried
	}
}

startBullMQApp();
