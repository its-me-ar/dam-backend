import dotenv from "dotenv";
import logger from "./config/logger";
import { getRedisConnection, closeRedisConnection } from "./config/redis";
import { Queue } from "bullmq";
import IORedis from "ioredis";

// Load environment variables
dotenv.config();

// Create separate Redis connections for different purposes
const pubSubConnection = new IORedis({
	host: process.env.REDIS_HOST || "127.0.0.1",
	port: Number(process.env.REDIS_PORT) || 6379,
	maxRetriesPerRequest: null,
	enableReadyCheck: false,
});

const queueConnection = new IORedis({
	host: process.env.REDIS_HOST || "127.0.0.1",
	port: Number(process.env.REDIS_PORT) || 6379,
	maxRetriesPerRequest: null,
	enableReadyCheck: false,
});

// Create queues for different job types
const videoQueue = new Queue("video-processing", { connection: queueConnection });
const imageQueue = new Queue("image-processing", { connection: queueConnection });

// Event-driven architecture - no HTTP endpoints needed

async function startBullMQApp() {
	try {
		logger.info("🚀 Starting Bull MQ Application...");

		// Test Redis connections
		await pubSubConnection.ping();
		await queueConnection.ping();
		logger.info("✅ Redis connections established");

		// Listen for jobs from main app
		pubSubConnection.subscribe("bullmq_jobs", (err, count) => {
			if (err) {
				logger.error("❌ Error subscribing to bullmq_jobs:", err);
				return;
			}
			logger.info(`📡 Subscribed to bullmq_jobs channel (${count} subscribers)`);
		});

		// Handle incoming jobs
		pubSubConnection.on("message", async (channel, message) => {
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
		logger.info("   - video-processing");
		logger.info("   - image-processing");

		// Keep the process alive
		process.on("SIGINT", async () => {
			logger.info("🛑 Shutting down Bull MQ Application...");
			await pubSubConnection.quit();
			await queueConnection.quit();
			process.exit(0);
		});

		process.on("SIGTERM", async () => {
			logger.info("🛑 Shutting down Bull MQ Application...");
			await pubSubConnection.quit();
			await queueConnection.quit();
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
async function handleJob(job: any) {
	const { type, data } = job;
	
	try {
		if (type === "video_processing") {
			logger.info(`🎬 Processing video job for ${data.asset_id}`);
			
			// Add job to video queue
			await videoQueue.add("transcode", {
				asset_id: data.asset_id,
				storage_path: data.storage_path,
			});
			
			// Forward to video worker app via events
			await forwardToWorker("video", data);
			
		} else if (type === "image_processing") {
			logger.info(`🖼️ Processing image job for ${data.asset_id}`);
			
			// Add job to image queue
			await imageQueue.add("process-image", {
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

		// Publish to worker-specific channel using queue connection
		await queueConnection.publish(`${workerType}_worker_events`, JSON.stringify(event));
		logger.info(`✅ Successfully published ${workerType} job event`);
	} catch (error) {
		logger.error(`❌ Failed to publish ${workerType} job event:`, error);
		// Job is still in queue, so it can be retried
	}
}

startBullMQApp();
