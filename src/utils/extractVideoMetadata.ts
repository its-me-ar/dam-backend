import ffmpeg, { FfprobeData } from "fluent-ffmpeg";
import ffprobeStatic from "ffprobe-static";

export interface VideoMetadata {
	duration: number; // in seconds
	width: number;
	height: number;
	size: number; // in bytes
}

// Set ffprobe path for fluent-ffmpeg
ffmpeg.setFfprobePath(ffprobeStatic.path);

export function extractVideoMetadata(filePath: string): Promise<VideoMetadata> {
	return new Promise((resolve, reject) => {
		ffmpeg.ffprobe(filePath, (err: Error | null, metadata: FfprobeData) => {
			if (err) {
				return reject(err);
			}

			if (!metadata.format) {
				return reject(new Error("No format info found"));
			}

			const size = parseInt(String(metadata.format.size ?? "0"), 10);
			const videoStream = metadata.streams.find(s => s.codec_type === "video");

			if (!videoStream || !videoStream.width || !videoStream.height) {
				return reject(
					new Error("Video stream not found or missing dimensions"),
				);
			}

			resolve({
				duration: metadata.format.duration || 0,
				width: videoStream.width,
				height: videoStream.height,
				size,
			});

			return;
		});
	});
}
