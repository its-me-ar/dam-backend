import { Queue } from "bullmq";
import connection from "src/config/redis";

export const videoQueue = new Queue("video-processing", { connection });

export const uploadQueue = new Queue("video-upload", { connection });
export const thumbnailQueue = new Queue("video-thumbnail", { connection });
