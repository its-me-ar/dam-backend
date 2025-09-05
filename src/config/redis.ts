import IORedis from "ioredis";
import logger from "./logger";

const connection = new IORedis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379,
  maxRetriesPerRequest: null, // required by BullMQ
  enableReadyCheck: false,
});

connection.on("connect", () => logger.info("[Redis] Connected to Redis ✅"));
connection.on("error", err => logger.error("[Redis] Connection error ❌", err));

export default connection;
