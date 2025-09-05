import { Queue } from "bullmq";
import connection from "src/config/redis";

// Main queue for image processing
export const imageQueue = new Queue("image-processing", { connection });

// Separate queue for image thumbnails
export const imageThumbnailQueue = new Queue("image-thumbnail", { connection });

// Optional: upload queue (can reuse video’s uploadQueue if you want)
export const imageUploadQueue = new Queue("image-upload", { connection });
