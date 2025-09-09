import { Router } from "express";
import { validate } from "../middlewares/validate";
import { filenameQuerySchema } from "src/schemas/assetsSchema";
import {
	getPresignedUploadUrl,
	completeAssetUpload,
	getUserAssets,
	getAssetById,
	getProcessingJobs,
	getAssetMetrics,
} from "src/controllers/assetsController";
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


// Get asset by id
router.get("/:id", authenticate, getAssetById);


export default router;
