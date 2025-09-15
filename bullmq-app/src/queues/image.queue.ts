import { Queue } from "bullmq";
import { getQueueConnection } from "../config/redis";

// Image processing queue
export const imageQueue = new Queue("image-processing", { 
	connection: getQueueConnection() 
});

export default imageQueue;
