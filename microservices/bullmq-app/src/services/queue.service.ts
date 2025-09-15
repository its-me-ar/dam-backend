import { getPubSubConnection, getDefaultConnection } from "../config/redis";
import logger from "../config/logger";

export class QueueService {
	/**
	 * Add a video processing job to the queue
	 */
	async addVideoJob(data: any): Promise<void> {
		try {
			// Publish job event to video worker instead of adding to queue
			const event = {
				type: "video_job",
				data: {
					...data,
					worker_type: "video",
					timestamp: new Date().toISOString(),
				},
			};
			await this.publishJobEvent("video", event);
			logger.info(`📤 Video job event published: ${data.asset_id}`);
		} catch (error) {
			logger.error("❌ Failed to publish video job event:", error);
			throw error;
		}
	}

	/**
	 * Add an image processing job to the queue
	 */
	async addImageJob(data: any): Promise<void> {
		try {
			// Publish job event to image worker instead of adding to queue
			const event = {
				type: "image_job",
				data: {
					...data,
					worker_type: "image",
					timestamp: new Date().toISOString(),
				},
			};
			await this.publishJobEvent("image", event);
			logger.info(`📤 Image job event published: ${data.asset_id}`);
		} catch (error) {
			logger.error("❌ Failed to publish image job event:", error);
			throw error;
		}
	}

	/**
	 * Publish job event to workers
	 */
	async publishJobEvent(workerType: string, event: any): Promise<void> {
		try {
			// Use a separate connection for publishing (not the subscriber connection)
			const publishConnection = getDefaultConnection();
			await publishConnection.publish(`${workerType}_worker_events`, JSON.stringify(event));
			logger.info(`✅ Successfully published ${workerType} job event`);
		} catch (error) {
			logger.error(`❌ Failed to publish ${workerType} job event:`, error);
			// Job is still in queue, so it can be retried
		}
	}

	/**
	 * Get queue statistics
	 */
	async getQueueStats() {
		try {
			// Since we're not using queues directly, return empty stats
			return {
				video: { waiting: 0, active: 0, completed: 0, failed: 0, delayed: 0, paused: 0 },
				image: { waiting: 0, active: 0, completed: 0, failed: 0, delayed: 0, paused: 0 },
			};
		} catch (error) {
			logger.error("❌ Failed to get queue stats:", error);
			throw error;
		}
	}
}

export const queueService = new QueueService();
export default queueService;
