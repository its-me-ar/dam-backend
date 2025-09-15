import IORedis from "ioredis";
import logger from "./logger";

// Singleton pattern to prevent multiple Redis connections
let redisInstance: IORedis | null = null;

export function getRedisConnection(): IORedis {
	if (!redisInstance) {
		redisInstance = new IORedis({
			host: process.env.REDIS_HOST || "127.0.0.1",
			port: Number(process.env.REDIS_PORT) || 6379,
			maxRetriesPerRequest: null,
			enableReadyCheck: false,
		});

		redisInstance.on("connect", () => logger.info("[Redis] Connected to Redis ✅"));
		redisInstance.on("error", err => logger.error("[Redis] Connection error ❌", err));
		redisInstance.on("close", () => logger.warn("[Redis] Connection closed"));
		redisInstance.on("reconnecting", () => logger.info("[Redis] Reconnecting to Redis..."));
	}

	return redisInstance;
}

// Graceful shutdown
export async function closeRedisConnection(): Promise<void> {
	if (redisInstance) {
		await redisInstance.quit();
		redisInstance = null;
		logger.info("[Redis] Connection closed gracefully");
	}
}

export default getRedisConnection();
