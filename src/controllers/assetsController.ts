import { Request, Response } from "express";
import { S3Service } from "../services/S3Service";
import logger from "src/config/logger";
import { PrismaClient, AssetStatus, Prisma, JobStatus } from "generated/prisma";
import { v4 as uuidv4 } from "uuid";
import { videoQueue } from "src/queues/video.queue";
import { imageQueue } from "src/queues/image.queue";

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

		return res.status(200).json({
			status: "success",
			message: "Presigned download URL generated",
			data: { url },
		});
	} catch (err) {
		logger.error(err);
		return res.status(500).json({
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

		// ✅ enqueue transcoding if asset is a video
		if (asset.mime_type.startsWith("video")) {
			logger.info(`[AssetUpload] 🎬 Adding video job for ${asset.asset_id}`);
			const job = await videoQueue.add("transcode", {
				asset_id: asset.asset_id,
				storage_path: asset.storage_path,
			});
			// record job
			await prisma.transcodingJob.create({
				data: {
					asset_id: asset.asset_id,
					job_id: String(job.id),
					status: JobStatus.PENDING,
					worker_name: "video-processing",
					event_name: "enqueued",
				},
			});
		} else if (asset.mime_type.startsWith("image")) {
			logger.info(`[AssetUpload] 🖼️ Adding image job for ${asset.asset_id}`);
			const job = await imageQueue.add("process-image", {
				asset_id: asset.asset_id,
				storage_path: asset.storage_path,
			});
			await prisma.transcodingJob.create({
				data: {
					asset_id: asset.asset_id,
					job_id: String(job.id),
					status: JobStatus.PENDING,
					worker_name: "image-processing",
					event_name: "enqueued",
				},
			});
		} else {
			logger.info(
				`[AssetUpload] 📂 Asset ${asset.asset_id} is not video/image. Skipping workers.`,
			);
		}

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

/**
 * GET /api/assets
 * Returns all assets of the logged-in user with metadata
 */

export const getUserAssets = async (req: Request, res: Response) => {
	try {
		const userId = req.user?.userId;
		const userRole = req.user?.role;

		if (!userId) {
			return res.status(401).json({ status: "error", message: "Unauthorized" });
		}

		// If admin or manager → fetch all assets
		const isPrivileged = userRole === "ADMIN" || userRole === "MANAGER";

		const assets = await prisma.asset.findMany({
			where: isPrivileged
				? { status: AssetStatus.COMPLETED }
				: { uploader_id: userId, status: AssetStatus.COMPLETED },
			include: {
				metadata: true,
				shares: {
					include: {
						user: {
							select: {
								id: true,
								full_name: true,
								email: true,
								role: true,
							},
						},
					},
				},
				uploader: {
					select: {
						id: true,
						full_name: true,
						email: true,
						role: true,
					},
				},
			},
			orderBy: { created_at: "desc" },
		});

		return res.status(200).json({
			status: "success",
			message: isPrivileged
				? "All assets fetched successfully"
				: "User assets fetched successfully",
			data: assets,
		});
	} catch (err: unknown) {
		if (err instanceof Error) {
			logger.error(`[GetUserAssets] ❌ ${err.message}`);
		} else {
			logger.error(
				"[GetUserAssets] ❌ Unknown error while fetching user assets",
			);
		}

		return res.status(500).json({
			status: "error",
			message: "Failed to fetch user assets",
		});
	}
};

/**
 * GET /api/assets/:id
 * Returns pre-signed download URLs for the asset and its metadata (e.g., 480p, 720p versions)
 */
export const getAssetById = async (req: Request, res: Response) => {
	try {
		const userId = req.user?.userId;
		const userRole = req.user?.role;
		const { id } = req.params;

		if (!userId) {
			return res.status(401).json({ status: "error", message: "Unauthorized" });
		}

		// Fetch the asset including uploader (to check ownership)
		const asset = await prisma.asset.findFirst({
			where: { asset_id: id, status: AssetStatus.COMPLETED },
			include: { metadata: true, uploader: true },
		});

		if (!asset) {
			return res
				.status(404)
				.json({ status: "error", message: "Asset not found" });
		}

		// Check access permissions
		const isPrivileged = userRole === "ADMIN" || userRole === "MANAGER";
		const isOwner = asset.uploader_id === userId;

		// If not owner and not privileged, check if asset is shared with user
		let hasSharedAccess = false;
		if (!isOwner && !isPrivileged) {
			const sharedAsset = await prisma.assetShare.findFirst({
				where: {
					asset_id: id,
					is_active: true,
					OR: [
						{ share_type: "PUBLIC" },
						{ share_type: "RESTRICTED", user_id: userId },
					],
				},
			});
			hasSharedAccess = !!sharedAsset;
		}

		if (!isOwner && !isPrivileged && !hasSharedAccess) {
			return res.status(403).json({ status: "error", message: "Forbidden" });
		}

		// Build presigned URLs
		const paths: Record<string, string> = {};

		// Original file
		if (asset.storage_path) {
			paths["original"] = await s3Service.getPresignedDownloadUrl(
				asset.storage_path,
			);
		}

		// Variants from metadata (480p, 720p)
		for (const meta of asset.metadata) {
			if (
				meta.value &&
				typeof meta.value === "object" &&
				!Array.isArray(meta.value)
			) {
				const val = meta.value as Prisma.JsonObject;

				for (const reso of ["480p", "720p"]) {
					const variant = val[reso];
					if (
						variant &&
						typeof variant === "object" &&
						!Array.isArray(variant)
					) {
						const path = (variant as Prisma.JsonObject)["path"];
						if (typeof path === "string") {
							paths[reso] = await s3Service.getPresignedDownloadUrl(path);
						}
					}
				}
			}
		}

		return res.status(200).json({
			status: "success",
			message: "Asset paths fetched successfully",
			data: {
				asset_id: asset.asset_id,
				filename: asset.filename,
				mime_type: asset.mime_type,
				uploader: {
					id: asset.uploader.id,
					full_name: asset.uploader.full_name,
					email: asset.uploader.email,
					role: asset.uploader.role,
				},
				paths,
			},
		});
	} catch (error) {
		logger.error("getAssetById error:", error);
		return res.status(500).json({ status: "error", message: "Server error" });
	}
};

/**
 * GET /uploads/jobs
 * Returns processing jobs (PENDING/ACTIVE/FAILED)
 * - Admin/Manager: all jobs
 * - User: only jobs for their own assets
 */
export const getProcessingJobs = async (req: Request, res: Response) => {
	try {
		const userId = req.user?.userId;
		const userRole = req.user?.role;

		if (!userId) {
			return res.status(401).json({ status: "error", message: "Unauthorized" });
		}

		const isPrivileged = userRole === "ADMIN" || userRole === "MANAGER";

		const where = isPrivileged
			? {
					status: {
						in: [JobStatus.PENDING, JobStatus.ACTIVE, JobStatus.FAILED],
					},
				}
			: {
					status: {
						in: [JobStatus.PENDING, JobStatus.ACTIVE, JobStatus.FAILED],
					},
					asset: { uploader_id: userId },
				};

		const jobs = await prisma.transcodingJob.findMany({
			where,
			include: {
				asset: {
					select: {
						asset_id: true,
						filename: true,
						mime_type: true,
						uploader_id: true,
						status: true,
						created_at: true,
					},
				},
			},
			orderBy: { created_at: "desc" },
		});

		return res.status(200).json({
			status: "success",
			message: isPrivileged
				? "All processing jobs fetched successfully"
				: "User processing jobs fetched successfully",
			data: jobs,
		});
	} catch (err: unknown) {
		if (err instanceof Error) {
			logger.error(`[GetProcessingJobs] ❌ ${err.message}`);
		} else {
			logger.error("[GetProcessingJobs] ❌ Unknown error while fetching jobs");
		}
		return res
			.status(500)
			.json({ status: "error", message: "Failed to fetch processing jobs" });
	}
};

/**
 * GET /uploads/metrics
 * Returns asset metrics: total assets, added this week, storage used in GB, new uploads today
 * - Admin/Manager: across all users
 * - User: only their own assets
 */
export const getAssetMetrics = async (req: Request, res: Response) => {
	try {
		const userId = req.user?.userId;
		const userRole = req.user?.role;

		if (!userId) {
			return res.status(401).json({ status: "error", message: "Unauthorized" });
		}

		const isPrivileged = userRole === "ADMIN" || userRole === "MANAGER";

		const baseWhere = isPrivileged ? {} : { uploader_id: userId };

		const now = new Date();
		const startOfToday = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
		);
		const sevenDaysAgo = new Date(now);
		sevenDaysAgo.setDate(now.getDate() - 7);

		const [totalAssets, addedThisWeek, newToday, storageAgg] =
			await Promise.all([
				prisma.asset.count({ where: baseWhere }),
				prisma.asset.count({
					where: { ...baseWhere, created_at: { gte: sevenDaysAgo } },
				}),
				prisma.asset.count({
					where: { ...baseWhere, created_at: { gte: startOfToday } },
				}),
				prisma.asset.aggregate({
					where: baseWhere,
					_sum: { size_bytes: true },
				}),
			]);

		const totalBytes = storageAgg._sum.size_bytes || 0;
		const storageUsedGB = Number(
			(totalBytes / (1024 * 1024 * 1024)).toFixed(3),
		);

		return res.status(200).json({
			status: "success",
			message: "Asset metrics fetched successfully",
			data: {
				totalAssets,
				addedThisWeek,
				storageUsedGB,
				newUploadsToday: newToday,
			},
		});
	} catch (err: unknown) {
		if (err instanceof Error) {
			logger.error(`[GetAssetMetrics] ❌ ${err.message}`);
		} else {
			logger.error("[GetAssetMetrics] ❌ Unknown error while fetching metrics");
		}
		return res
			.status(500)
			.json({ status: "error", message: "Failed to fetch asset metrics" });
	}
};
