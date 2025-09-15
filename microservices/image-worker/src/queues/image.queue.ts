import { Queue } from "bullmq";
import { getQueueConnection } from "../config/redis";

// Main queue for image processing
export const imageQueue = new Queue("image-processing", { connection: getQueueConnection() });

// Separate queue for image thumbnails
export const imageThumbnailQueue = new Queue("image-thumbnail", { connection: getQueueConnection() });

// Optional: upload queue (can reuse video's uploadQueue if you want)
export const imageUploadQueue = new Queue("image-upload", { connection: getQueueConnection() });
