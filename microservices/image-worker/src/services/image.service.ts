import { S3Service } from "./S3Service";
import { ImageProcessingResult, ThumbnailConfig } from "../types/worker.types";
import logger from "../config/logger";
import sharp from "sharp";
import path from "path";
import fs from "fs";
import { upsertImageMetadata } from "../utils/upsertImageMetadata";

export class ImageService {
	private s3Service: S3Service;
	private tempDir: string;

	constructor() {
		this.s3Service = new S3Service();
		this.tempDir = "/tmp";
	}

	/**
	 * Process an image file
	 */
	async processImage(assetId: string, storagePath: string): Promise<ImageProcessingResult> {
		try {
			logger.info(`🖼️ Processing image: ${assetId}`);
			logger.info(`[ImageService] 🔍 Starting image processing for asset_id=${assetId}`);

			// Download image from S3
			logger.info(`[ImageService] ⬇️ Downloading image from S3: ${storagePath}`);
			const localPath = await this.downloadImage(assetId, storagePath);
			logger.info(`[ImageService] ✅ Downloaded image to: ${localPath}`);
			
			// Extract metadata
			logger.info(`[ImageService] 🔍 Extracting metadata from image`);
			const metadata = await this.extractMetadata(localPath);
			logger.info(`[ImageService] ✅ Metadata extracted: ${JSON.stringify(metadata)}`);
			
			// Generate thumbnails
			logger.info(`[ImageService] 🔍 Generating thumbnails for asset_id=${assetId}`);
			const thumbnails = await this.generateThumbnails(assetId, localPath);
			logger.info(`[ImageService] ✅ Generated ${thumbnails.length} thumbnails`);
			
			// Upload processed files back to S3
			logger.info(`[ImageService] 🔍 Uploading processed files to S3`);
			const processedFiles = await this.uploadProcessedFiles(assetId, localPath, thumbnails);
			logger.info(`[ImageService] ✅ Uploaded ${processedFiles.length} files to S3`);

			// Save metadata to database
			logger.info(`[ImageService] 💾 Saving original metadata for asset_id=${assetId}`);
			const stats = fs.statSync(localPath);
			await upsertImageMetadata(
				assetId,
				"original",
				`assets/${assetId}/processed.jpg`,
				{
					width: metadata.width || 0,
					height: metadata.height || 0,
					size: stats.size
				}
			);
			logger.info(`[ImageService] ✅ Original metadata saved for asset_id=${assetId}`);

			// Save thumbnail metadata
			for (const thumbnail of thumbnails) {
				const thumbnailKey = `assets/${assetId}/thumbnails/thumb-${thumbnail.config.width}x${thumbnail.config.height}.${thumbnail.config.format}`;
				logger.info(`[ImageService] 💾 Saving thumbnail metadata for asset_id=${assetId}`);
				await upsertImageMetadata(
					assetId,
					"thumbnail",
					thumbnailKey,
					{
						width: thumbnail.config.width,
						height: thumbnail.config.height,
						size: fs.statSync(thumbnail.outputPath).size
					}
				);
				logger.info(`[ImageService] ✅ Thumbnail metadata saved for asset_id=${assetId}`);
			}

			// Cleanup temp files
			logger.info(`[ImageService] 🔍 Cleaning up temporary files`);
			await this.cleanupTempFiles(localPath, thumbnails);
			logger.info(`[ImageService] ✅ Cleaned up temporary files`);

			logger.info(`✅ Successfully processed image: ${assetId}`);

			return {
				success: true,
				asset_id: assetId,
				processed_files: processedFiles,
				thumbnails: thumbnails.map(t => t.outputPath),
				metadata,
			};
		} catch (error) {
			logger.error(`❌ Failed to process image ${assetId}:`, error);
			return {
				success: false,
				asset_id: assetId,
				error: error instanceof Error ? error.message : "Unknown error",
			};
		}
	}

	/**
	 * Download image from S3 to local temp directory
	 */
	private async downloadImage(assetId: string, storagePath: string): Promise<string> {
		const localPath = path.join(this.tempDir, `${assetId}-original`);
		
		logger.info(`⬇️ Downloading image from S3: ${storagePath}`);
		await this.s3Service.downloadToFile(storagePath, localPath);
		
		return localPath;
	}

	/**
	 * Extract metadata from image
	 */
	private async extractMetadata(imagePath: string): Promise<Record<string, any>> {
		try {
			const metadata = await sharp(imagePath).metadata();
			return {
				width: metadata.width,
				height: metadata.height,
				format: metadata.format,
				size: metadata.size,
				density: metadata.density,
				hasAlpha: metadata.hasAlpha,
				hasProfile: metadata.hasProfile,
				orientation: metadata.orientation,
			};
		} catch (error) {
			logger.error("❌ Failed to extract metadata:", error);
			return {};
		}
	}

	/**
	 * Generate thumbnail for the image
	 */
	private async generateThumbnails(assetId: string, imagePath: string): Promise<Array<{outputPath: string, config: ThumbnailConfig}>> {
		const thumbnailConfig: ThumbnailConfig = { width: 320, height: 320, quality: 80, format: "jpeg" };
		const thumbnails = [];

		try {
			const outputPath = path.join(this.tempDir, `${assetId}-thumbnail.${thumbnailConfig.format}`);
			
			await sharp(imagePath)
				.resize({ width: thumbnailConfig.width })
				.jpeg({ quality: thumbnailConfig.quality })
				.toFile(outputPath);

			thumbnails.push({ outputPath, config: thumbnailConfig });
			logger.info(`📸 Generated thumbnail: ${thumbnailConfig.width}px width`);
		} catch (error) {
			logger.error(`❌ Failed to generate thumbnail:`, error);
		}

		return thumbnails;
	}

	/**
	 * Upload processed files to S3
	 */
	private async uploadProcessedFiles(
		assetId: string, 
		originalPath: string, 
		thumbnails: Array<{outputPath: string, config: ThumbnailConfig}>
	): Promise<string[]> {
		const uploadedFiles = [];

		// Upload original processed image
		const originalKey = `assets/${assetId}/processed.jpg`;
		const originalBuffer = fs.readFileSync(originalPath);
		await this.s3Service.upload(originalKey, originalBuffer, 'image/jpeg');
		uploadedFiles.push(originalKey);

		// Upload thumbnails
		for (const thumbnail of thumbnails) {
			const thumbnailKey = `assets/${assetId}/thumbnails/thumb-${thumbnail.config.width}x${thumbnail.config.height}.${thumbnail.config.format}`;
			logger.info(`[ImageService] 📤 Uploading thumbnail to S3: ${thumbnailKey}`);
			const thumbnailBuffer = fs.readFileSync(thumbnail.outputPath);
			await this.s3Service.upload(thumbnailKey, thumbnailBuffer, `image/${thumbnail.config.format}`);
			logger.info(`[ImageService] ✅ Uploaded thumbnail to S3: ${thumbnailKey}`);
			uploadedFiles.push(thumbnailKey);
		}

		return uploadedFiles;
	}

	/**
	 * Cleanup temporary files
	 */
	private async cleanupTempFiles(originalPath: string, thumbnails: Array<{outputPath: string, config: ThumbnailConfig}>): Promise<void> {
		try {
			// Remove original temp file
			if (fs.existsSync(originalPath)) {
				fs.unlinkSync(originalPath);
			}

			// Remove thumbnail temp files
			for (const thumbnail of thumbnails) {
				if (fs.existsSync(thumbnail.outputPath)) {
					fs.unlinkSync(thumbnail.outputPath);
				}
			}

			logger.info("🧹 Cleaned up temporary files");
		} catch (error) {
			logger.error("❌ Failed to cleanup temp files:", error);
		}
	}

	/**
	 * Get thumbnail configuration
	 */
	getThumbnailConfigs(): ThumbnailConfig[] {
		return [
			{ width: 320, height: 320, quality: 80, format: "jpeg" },
		];
	}
}

export const imageService = new ImageService();
export default imageService;
