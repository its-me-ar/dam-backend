import { Queue } from "bullmq";
import { getQueueConnection } from "../config/redis";

// Video processing queue
export const videoQueue = new Queue("video-processing", { 
	connection: getQueueConnection() 
});

export default videoQueue;
