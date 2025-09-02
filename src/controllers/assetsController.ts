import { Request, Response } from "express";
import { S3Service } from "../services/S3Service";
import logger from "src/config/logger";
import { PrismaClient, AssetStatus } from "generated/prisma";
import { v4 as uuidv4 } from "uuid";

const s3Service = new S3Service();
const prisma = new PrismaClient();

/**
 * Generate presigned upload URL
 * Assumes query has been validated by Zod middleware
 */
export const getPresignedUploadUrl = async (req: Request, res: Response) => {
	try {
		const { filename, size_bytes, mime_type } = req.body;
		const userId = req.user?.userId;

		if (!userId) {
			return res.status(401).json({ status: "error", message: "Unauthorized" });
		}

		// Check if an asset with same filename and status START exists for this user
		let asset = await prisma.asset.findFirst({
			where: {
				filename,
				uploader_id: userId,
				status: "START",
			},
		});

		if (!asset) {
			// Generate asset_id first
			const assetId = uuidv4();
			const storagePath = `assets/${assetId}/${filename}`;

			// Create new asset with full storage_path
			asset = await prisma.asset.create({
				data: {
					asset_id: assetId,
					filename,
					mime_type,
					storage_path: storagePath,
					uploader_id: userId,
					size_bytes,
					status: "START" as AssetStatus,
				},
			});
		}

		// Generate presigned URL using the correct storage path
		const url = await s3Service.getPresignedUploadUrl(asset.storage_path);

		return res.status(200).json({
			status: "success",
			message: "Presigned upload URL generated",
			data: { url, asset_id: asset.asset_id },
		});
	} catch (err) {
		logger.error(err);
		return res.status(500).json({
			status: "error",
			message: "Failed to generate presigned upload URL",
		});
	}
};

/**
 * Generate presigned download URL
 * Assumes query has been validated by Zod middleware
 */
export const getPresignedDownloadUrl = async (req: Request, res: Response) => {
	try {
		const { filename } = req.query as { filename: string };

		const url = await s3Service.getPresignedDownloadUrl(filename);

		res.status(200).json({
			status: "success",
			message: "Presigned download URL generated",
			data: { url },
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({
			status: "error",
			message: "Failed to generate presigned download URL",
		});
	}
};

/**
 * Complete an asset upload by updating its status to COMPLETED
 * Assumes request body has been validated by Zod middleware
 *
 * @param req - Express request object (expects { asset_id: string })
 * @param res - Express response object
 */

export const completeAssetUpload = async (req: Request, res: Response) => {
	try {
		const { asset_id } = req.body;
		const userId = req.user?.userId;

		if (!asset_id) {
			return res
				.status(400)
				.json({ status: "error", message: "asset_id is required" });
		}

		// Find the asset
		const asset = await prisma.asset.findUnique({
			where: { asset_id },
		});

		if (!asset) {
			return res
				.status(404)
				.json({ status: "error", message: "Asset not found" });
		}

		// Optional: ensure only uploader can mark as completed
		if (userId && asset.uploader_id !== userId) {
			return res.status(403).json({
				status: "error",
				message: "Not authorized to complete this asset",
			});
		}

		// Check current status
		if (asset.status === AssetStatus.COMPLETED) {
			return res.status(400).json({
				status: "error",
				message: "Asset upload already completed",
			});
		}

		// Check if the file exists in S3/MinIO
		const fileExists = await s3Service.fileExists(asset.storage_path);
		if (!fileExists) {
			return res.status(400).json({
				status: "error",
				message: "File not found in storage. Cannot complete upload.",
			});
		}

		// Update status to COMPLETED
		const updatedAsset = await prisma.asset.update({
			where: { asset_id },
			data: { status: AssetStatus.COMPLETED },
		});

		return res.status(200).json({
			status: "success",
			message: "Asset status updated to COMPLETED",
			data: updatedAsset,
		});
	} catch (err) {
		logger.error(err);
		return res.status(500).json({
			status: "error",
			message: "Failed to update asset status",
		});
	}
};
