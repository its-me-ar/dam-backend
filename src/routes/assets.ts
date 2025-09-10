import { Router } from "express";
import { validate } from "../middlewares/validate";
import { filenameQuerySchema } from "src/schemas/assetsSchema";
import {
	createShareSchema,
	shareIdSchema,
} from "src/schemas/sharingSchema";
import {
	getPresignedUploadUrl,
	completeAssetUpload,
	getUserAssets,
	getAssetById,
	getProcessingJobs,
	getAssetMetrics,
} from "src/controllers/assetsController";
import {
	createShare,
	deleteShare,
	getSharedAssets,
	getPublicAsset,
	getRestrictedAsset,
	getAssetVisibility,
} from "src/controllers/sharingController";
import { authenticate } from "src/middlewares/authMiddleware";

const router = Router();

// POST /upload/presign
router.post(
	"/uploads/presign",
	authenticate,
	validate(filenameQuerySchema),
	getPresignedUploadUrl,
);
// POST /upload/complete
router.post("/uploads/complete", authenticate, completeAssetUpload);
// Get /upload
router.get("/", authenticate, getUserAssets);

// Jobs tracking
router.get("/jobs", authenticate, getProcessingJobs);

// Metrics
router.get("/metrics", authenticate, getAssetMetrics);

// Create a new share for an asset
router.post("/share", authenticate, validate(createShareSchema), createShare);

// Delete a share
router.delete("/share/:share_id", authenticate, validate(shareIdSchema), deleteShare);

// Get visibility of an asset (public API)
router.get("/share/visibility/:asset_id", getAssetVisibility);

// Get public asset by asset ID (no authentication required)
router.get("/public/:asset_id", getPublicAsset);

// Get restricted asset by asset ID (authentication required)
router.get("/restricted/:asset_id", authenticate, getRestrictedAsset);

// Get all public  and restricted shared assets
router.get("/shared", authenticate, getSharedAssets);

// Get asset by id
router.get("/:id", authenticate, getAssetById);

export default router;
