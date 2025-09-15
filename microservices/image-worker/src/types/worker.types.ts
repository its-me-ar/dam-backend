// Image job data types
export interface ImageJobData {
	asset_id: string;
	storage_path: string;
	timestamp: string;
	metadata?: Record<string, any>;
}

// Worker event types
export interface WorkerEvent {
	type: string;
	data: ImageJobData;
	timestamp: string;
	worker_type: string;
}

// Redis message types
export interface RedisMessage {
	type: "image_processing" | "image_thumbnail";
	data: ImageJobData;
}

// Worker status types
export enum WorkerStatus {
	IDLE = "idle",
	PROCESSING = "processing",
	ERROR = "error",
	COMPLETED = "completed",
}

// Image processing result types
export interface ImageProcessingResult {
	success: boolean;
	asset_id: string;
	processed_files?: string[];
	thumbnails?: string[];
	metadata?: Record<string, any>;
	error?: string;
}

// Thumbnail configuration
export interface ThumbnailConfig {
	width: number;
	height: number;
	quality: number;
	format: string;
}
