import { Queue } from "bullmq";
import { getQueueConnection } from "../config/redis";

export const videoQueue = new Queue("video-processing", { connection: getQueueConnection() });
export const uploadQueue = new Queue("video-upload", { connection: getQueueConnection() });
export const thumbnailQueue = new Queue("video-thumbnail", { connection: getQueueConnection() });
