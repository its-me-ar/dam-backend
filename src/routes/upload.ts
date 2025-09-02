import { Router } from "express";
import { validate } from "../middlewares/validate";
import { authenticate } from "src/middlewares/authMiddleware";
import { filenameQuerySchema } from "src/schemas/assetsSchema";
import {
	getPresignedUploadUrl,
	completeAssetUpload,
} from "src/controllers/assetsController";

const router = Router();

// POST /upload/presign
router.post(
	"/presign",
	authenticate,
	validate(filenameQuerySchema),
	getPresignedUploadUrl,
);
// POST /upload/complete
router.post("/complete", authenticate, completeAssetUpload);

export default router;
