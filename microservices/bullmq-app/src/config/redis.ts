import IORedis, { RedisOptions } from "ioredis";
import logger from "./logger";

// Redis connection configuration
export const redisConfig: RedisOptions = {
	host: process.env.REDIS_HOST || "127.0.0.1",
	port: Number(process.env.REDIS_PORT) || 6379,
	maxRetriesPerRequest: null, // required by BullMQ
	enableReadyCheck: false,
	lazyConnect: true,
};

// Redis connection types
export enum RedisConnectionType {
	PUB_SUB = "pubsub",
	QUEUE = "queue",
	DEFAULT = "default",
}

// Connection manager class
class RedisConnectionManager {
	private connections: Map<RedisConnectionType, IORedis> = new Map();

	/**
	 * Get or create a Redis connection
	 */
	getConnection(type: RedisConnectionType = RedisConnectionType.DEFAULT): IORedis {
		if (!this.connections.has(type)) {
			const connection = this.createConnection(type);
			this.connections.set(type, connection);
		}
		return this.connections.get(type)!;
	}

	/**
	 * Create a new Redis connection with proper event handling
	 */
	private createConnection(type: RedisConnectionType): IORedis {
		const connection = new IORedis(redisConfig);
		
		// Add connection type to identify in logs
		(connection as any).connectionType = type;

		connection.on("connect", () => {
			logger.info(`[Redis] ${type.toUpperCase()} connection established ✅`);
		});

		connection.on("error", (err) => {
			logger.error(`[Redis] ${type.toUpperCase()} connection error ❌`, err);
		});

		connection.on("close", () => {
			logger.warn(`[Redis] ${type.toUpperCase()} connection closed`);
		});

		connection.on("reconnecting", () => {
			logger.info(`[Redis] ${type.toUpperCase()} reconnecting...`);
		});

		return connection;
	}

	/**
	 * Close a specific connection
	 */
	async closeConnection(type: RedisConnectionType): Promise<void> {
		const connection = this.connections.get(type);
		if (connection) {
			await connection.quit();
			this.connections.delete(type);
			logger.info(`[Redis] ${type.toUpperCase()} connection closed gracefully`);
		}
	}

	/**
	 * Close all connections
	 */
	async closeAllConnections(): Promise<void> {
		const closePromises = Array.from(this.connections.entries()).map(async ([type, connection]) => {
			await connection.quit();
			logger.info(`[Redis] ${type.toUpperCase()} connection closed gracefully`);
		});
		
		await Promise.all(closePromises);
		this.connections.clear();
	}

	/**
	 * Get connection status
	 */
	getConnectionStatus(): Record<string, string> {
		const status: Record<string, string> = {};
		this.connections.forEach((connection, type) => {
			status[type] = connection.status;
		});
		return status;
	}
}

// Export singleton instance
export const redisManager = new RedisConnectionManager();

// Convenience functions for backward compatibility
export function getRedisConnection(type: RedisConnectionType = RedisConnectionType.DEFAULT): IORedis {
	return redisManager.getConnection(type);
}

export async function closeRedisConnection(type?: RedisConnectionType): Promise<void> {
	if (type) {
		await redisManager.closeConnection(type);
	} else {
		await redisManager.closeAllConnections();
	}
}

// Export specific connection getters
export const getPubSubConnection = () => redisManager.getConnection(RedisConnectionType.PUB_SUB);
export const getQueueConnection = () => redisManager.getConnection(RedisConnectionType.QUEUE);
export const getDefaultConnection = () => redisManager.getConnection(RedisConnectionType.DEFAULT);

export default redisManager;
