// Job data types
export interface VideoJobData {
	asset_id: string;
	storage_path: string;
	timestamp: string;
	metadata?: Record<string, any>;
}

export interface ImageJobData {
	asset_id: string;
	storage_path: string;
	timestamp: string;
	metadata?: Record<string, any>;
}

export interface JobEvent {
	type: string;
	data: VideoJobData | ImageJobData;
	timestamp: string;
}

// Queue event types
export interface QueueEvent {
	workerType: string;
	event: JobEvent;
}

// Redis message types
export interface RedisMessage {
	type: "video_processing" | "image_processing";
	data: VideoJobData | ImageJobData;
}
