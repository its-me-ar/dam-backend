import { Request, Response } from "express";
import { PrismaClient, AssetStatus, Prisma } from "generated/prisma";
import logger from "src/config/logger";
import { S3Service } from "../services/S3Service";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();
const s3Service = new S3Service();

/**
 * Create a new share for an asset
 * POST /api/uploads/share
 */
export const createShare = async (req: Request, res: Response) => {
  try {
    const { asset_id, share_type, user_ids } = req.body;
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ status: "error", message: "Unauthorized" });
    }

    // Validate share_type
    if (!["PUBLIC", "RESTRICTED"].includes(share_type)) {
      return res.status(400).json({
        status: "error",
        message: "share_type must be 'PUBLIC' or 'RESTRICTED'",
      });
    }

    // For RESTRICTED shares, user_ids array is required
    if (share_type === "RESTRICTED" && (!user_ids || !Array.isArray(user_ids) || user_ids.length === 0)) {
      return res.status(400).json({
        status: "error",
        message: "user_ids array is required for RESTRICTED shares",
      });
    }

    // Check if asset exists and user owns it
    const asset = await prisma.asset.findFirst({
      where: {
        asset_id,
        uploader_id: userId,
        status: AssetStatus.COMPLETED,
      },
    });

    if (!asset) {
      return res.status(404).json({
        status: "error",
        message: "Asset not found or you don't have permission to share it",
      });
    }

    // Check if share already exists for this asset
    const existingShare = await prisma.assetShare.findFirst({
      where: {
        asset_id,
        shared_by: userId,
        is_active: true,
      },
    });

    if (existingShare) {
      return res.status(400).json({
        status: "error",
        message: "Asset is already shared",
      });
    }

    // Create shares for each user
    const shares = [];
    
    if (share_type === "PUBLIC") {
      // Create one PUBLIC share
      const share_token = uuidv4();
      const share = await prisma.assetShare.create({
        data: {
          asset_id,
          shared_by: userId,
          share_type,
          share_token,
          user_id: null,
        },
      });
      shares.push(share);
    } else {
      // Create RESTRICTED shares for each user
      for (const user_id of user_ids) {
        const share_token = uuidv4();
        const share = await prisma.assetShare.create({
          data: {
            asset_id,
            shared_by: userId,
            share_type,
            share_token,
            user_id,
          },
        });
        shares.push(share);
      }
    }

    return res.status(201).json({
      status: "success",
      message: "Asset shared successfully",
      data: {
        shares: shares.map(share => ({
          share_id: share.id,
          share_token: share.share_token,
          share_type: share.share_type,
          user_id: share.user_id,
          created_at: share.created_at,
        })),
        total_shares: shares.length,
      },
    });
  } catch (err) {
    logger.error("createShare error:", err);
    return res.status(500).json({
      status: "error",
      message: "Failed to create share",
    });
  }
};

/**
 * Delete a share
 * DELETE /api/uploads/share/:share_id
 */
export const deleteShare = async (req: Request, res: Response) => {
  try {
    const { share_id } = req.params;
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ status: "error", message: "Unauthorized" });
    }

    // Check if share exists and user owns it
    const share = await prisma.assetShare.findFirst({
      where: {
        id: share_id,
        shared_by: userId,
      },
    });

    if (!share) {
      return res.status(404).json({
        status: "error",
        message: "Share not found or you don't have permission to delete it",
      });
    }

    // Delete the share
    await prisma.assetShare.delete({
      where: { id: share_id },
    });

    return res.status(200).json({
      status: "success",
      message: "Share deleted successfully",
    });
  } catch (err) {
    logger.error("deleteShare error:", err);
    return res.status(500).json({
      status: "error",
      message: "Failed to delete share",
    });
  }
};



/**
 * Get all assets shared with the current user (public shares)
 * GET /api/uploads/shared
 */
export const getSharedAssets = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ status: "error", message: "Unauthorized" });
    }

    // Get PUBLIC shares and RESTRICTED shares for this user
    const sharedAssets = await prisma.assetShare.findMany({
      where: {
        is_active: true,
        OR: [
          { share_type: "PUBLIC" },
          { share_type: "RESTRICTED", user_id: userId }
        ],
      },
      include: {
        asset: {
          include: {
            metadata: true,
            uploader: {
              select: {
                id: true,
                full_name: true,
                email: true,
                role: true,
              },
            },
          },
        },
        sharedBy: {
          select: {
            id: true,
            full_name: true,
            email: true,
          },
        },
        user: {
          select: {
            id: true,
            full_name: true,
            email: true,
          },
        },
      },
      orderBy: { created_at: "desc" },
    });

    return res.status(200).json({
      status: "success",
      message: "Shared assets fetched successfully",
      data: sharedAssets,
    });
  } catch (err) {
    logger.error("getSharedAssets error:", err);
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch shared assets",
    });
  }
};

/**
 * Get public asset by asset ID (no authentication required)
 * GET /api/uploads/public/:asset_id
 */
export const getPublicAsset = async (req: Request, res: Response) => {
  try {
    const { asset_id } = req.params;

    // Check if asset exists and is completed
    const asset = await prisma.asset.findFirst({
      where: {
        asset_id,
        status: AssetStatus.COMPLETED,
      },
      include: {
        uploader: {
          select: {
            id: true,
            full_name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    if (!asset) {
      return res.status(404).json({
        status: "error",
        message: "Asset not found",
      });
    }

    // Find PUBLIC share for this asset
    const share = await prisma.assetShare.findFirst({
      where: {
        asset_id,
        share_type: "PUBLIC",
        is_active: true,
      },
      include: {
        sharedBy: {
          select: {
            id: true,
            full_name: true,
            email: true,
          },
        },
      },
    });

    if (!share) {
      return res.status(404).json({
        status: "error",
        message: "Asset is not publicly shared",
      });
    }

    // Get asset metadata
    const assetMetadata = await prisma.assetMetadata.findMany({
      where: { asset_id },
    });

    // Build presigned URLs
    const paths: Record<string, string> = {};

    // Original file
    if (asset.storage_path) {
      paths["original"] = await s3Service.getPresignedDownloadUrl(
        asset.storage_path,
      );
    }

    // Variants from metadata (480p, 720p)
    for (const meta of assetMetadata) {
      if (
        meta.value &&
        typeof meta.value === "object" &&
        !Array.isArray(meta.value)
      ) {
        const val = meta.value as Prisma.JsonObject;

        // Video/image variants (480p, 720p)
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

        // Thumbnails - handle array structure and add to paths
        const thumbnailsArray = val["thumbnails"];
        if (Array.isArray(thumbnailsArray) && thumbnailsArray.length > 0) {
          for (let i = 0; i < thumbnailsArray.length; i++) {
            const thumb = thumbnailsArray[i];
            if (
              thumb &&
              typeof thumb === "object" &&
              !Array.isArray(thumb)
            ) {
              const thumbPath = (thumb as Prisma.JsonObject)["path"];
              if (typeof thumbPath === "string") {
                // Use index-based naming or default to "thumbnail"
                const thumbKey = i === 0 ? "thumbnail" : `thumbnail_${i}`;
                paths[thumbKey] = thumbPath;
              }
            }
          }
        }

        // Also check for single thumbnail property (fallback)
        const thumbnail = val["thumbnail"];
        if (
          thumbnail &&
          typeof thumbnail === "object" &&
          !Array.isArray(thumbnail)
        ) {
          const thumbPath = (thumbnail as Prisma.JsonObject)["path"];
          if (typeof thumbPath === "string") {
            paths["thumbnail"] = thumbPath;
          }
        }
      }
    }

    return res.status(200).json({
      status: "success",
      message: "Asset accessed successfully",
      data: {
        asset_id: asset.asset_id,
        filename: asset.filename,
        mime_type: asset.mime_type,
        size_bytes: asset.size_bytes,
        uploader: {
          id: asset.uploader.id,
          full_name: asset.uploader.full_name,
          email: asset.uploader.email,
          role: asset.uploader.role,
        },
        shared_by: {
          id: share.sharedBy.id,
          full_name: share.sharedBy.full_name,
          email: share.sharedBy.email,
        },
        share_type: share.share_type,
        created_at: share.created_at,
        paths,
      },
    });
  } catch (err) {
    logger.error("getPublicAsset error:", err);
    return res.status(500).json({
      status: "error",
      message: "Failed to access asset",
    });
  }
};

/**
 * Get restricted asset by asset ID (authentication required)
 * GET /api/uploads/restricted/:asset_id
 */
export const getRestrictedAsset = async (req: Request, res: Response) => {
  try {
    const { asset_id } = req.params;
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ status: "error", message: "Unauthorized" });
    }

    // Check if asset exists and is completed
    const asset = await prisma.asset.findFirst({
      where: {
        asset_id,
        status: AssetStatus.COMPLETED,
      },
      include: {
        uploader: {
          select: {
            id: true,
            full_name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    if (!asset) {
      return res.status(404).json({
        status: "error",
        message: "Asset not found",
      });
    }

    // Check if user has access to this asset
    const isOwner = asset.uploader_id === userId;
    const userRole = req.user?.role;
    const isPrivileged = userRole === "ADMIN" || userRole === "MANAGER";

    // If not owner and not privileged, check if asset is shared with user
    let hasSharedAccess = false;
    let share = null;

    if (!isOwner && !isPrivileged) {
      share = await prisma.assetShare.findFirst({
        where: {
          asset_id,
          is_active: true,
          OR: [
            { share_type: "PUBLIC" },
            { share_type: "RESTRICTED", user_id: userId }
          ],
        },
        include: {
          sharedBy: {
            select: {
              id: true,
              full_name: true,
              email: true,
            },
          },
        },
      });
      hasSharedAccess = !!share;
    }

    if (!isOwner && !isPrivileged && !hasSharedAccess) {
      return res.status(403).json({
        status: "error",
        message: "You don't have access to this asset",
      });
    }

    // Get asset metadata
    const assetMetadata = await prisma.assetMetadata.findMany({
      where: { asset_id },
    });

    // Build presigned URLs
    const paths: Record<string, string> = {};

    // Original file
    if (asset.storage_path) {
      paths["original"] = await s3Service.getPresignedDownloadUrl(
        asset.storage_path,
      );
    }

    // Variants from metadata (480p, 720p)
    for (const meta of assetMetadata) {
      if (
        meta.value &&
        typeof meta.value === "object" &&
        !Array.isArray(meta.value)
      ) {
        const val = meta.value as Prisma.JsonObject;

        // Video/image variants (480p, 720p)
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

        // Thumbnails - handle array structure and add to paths
        const thumbnailsArray = val["thumbnails"];
        if (Array.isArray(thumbnailsArray) && thumbnailsArray.length > 0) {
          for (let i = 0; i < thumbnailsArray.length; i++) {
            const thumb = thumbnailsArray[i];
            if (
              thumb &&
              typeof thumb === "object" &&
              !Array.isArray(thumb)
            ) {
              const thumbPath = (thumb as Prisma.JsonObject)["path"];
              if (typeof thumbPath === "string") {
                // Use index-based naming or default to "thumbnail"
                const thumbKey = i === 0 ? "thumbnail" : `thumbnail_${i}`;
                paths[thumbKey] = thumbPath;
              }
            }
          }
        }

        // Also check for single thumbnail property (fallback)
        const thumbnail = val["thumbnail"];
        if (
          thumbnail &&
          typeof thumbnail === "object" &&
          !Array.isArray(thumbnail)
        ) {
          const thumbPath = (thumbnail as Prisma.JsonObject)["path"];
          if (typeof thumbPath === "string") {
            paths["thumbnail"] = thumbPath;
          }
        }
      }
    }

    // Determine share info for response
    let shareInfo = null;
    if (share) {
      shareInfo = {
        id: share.sharedBy.id,
        full_name: share.sharedBy.full_name,
        email: share.sharedBy.email,
      };
    } else if (isOwner) {
      shareInfo = {
        id: asset.uploader.id,
        full_name: asset.uploader.full_name,
        email: asset.uploader.email,
      };
    }

    return res.status(200).json({
      status: "success",
      message: "Asset accessed successfully",
      data: {
        asset_id: asset.asset_id,
        filename: asset.filename,
        mime_type: asset.mime_type,
        size_bytes: asset.size_bytes,
        uploader: {
          id: asset.uploader.id,
          full_name: asset.uploader.full_name,
          email: asset.uploader.email,
          role: asset.uploader.role,
        },
        shared_by: shareInfo,
        share_type: share ? share.share_type : (isOwner ? "OWNER" : "PRIVILEGED"),
        created_at: share ? share.created_at : asset.created_at,
        paths,
      },
    });
  } catch (err) {
    logger.error("getRestrictedAsset error:", err);
    return res.status(500).json({
      status: "error",
      message: "Failed to access asset",
    });
  }
};

/**
 * Get asset visibility information (public API)
 * GET /api/uploads/visibility/:asset_id
 */
export const getAssetVisibility = async (req: Request, res: Response) => {
  try {
    const { asset_id } = req.params;

    // Basic UUID validation
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(asset_id)) {
      return res.status(400).json({
        status: "error",
        message: "Invalid asset ID format",
      });
    }

    // Check if asset exists
    const asset = await prisma.asset.findFirst({
      where: {
        asset_id,
        status: AssetStatus.COMPLETED,
      },
    });

    if (!asset) {
      return res.status(404).json({
        status: "error",
        message: "Asset not found",
      });
    }

    // Get all active shares for this asset
    const shares = await prisma.assetShare.findMany({
      where: {
        asset_id,
        is_active: true,
      },
      select: {
        share_type: true,
      },
    });

    // Determine visibility status
    let visibility_status = "PRIVATE"; // Default: not shared

    if (shares.length > 0) {
      const hasPublicShare = shares.some(share => share.share_type === "PUBLIC");
      const hasRestrictedShare = shares.some(share => share.share_type === "RESTRICTED");

      if (hasPublicShare) {
        visibility_status = "PUBLIC";
      } else if (hasRestrictedShare) {
        visibility_status = "RESTRICTED";
      }
    }

    return res.status(200).json({
      status: "success",
      message: "Asset visibility fetched successfully",
      data: {
        asset_id,
        visibility_status,
      },
    });
  } catch (err) {
    logger.error("getAssetVisibility error:", err);
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch asset visibility",
    });
  }
};