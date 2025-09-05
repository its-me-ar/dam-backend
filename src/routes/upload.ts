import { Router } from "express";
import { validate } from "../middlewares/validate";
import { authenticate } from "src/middlewares/authMiddleware";
import { filenameQuerySchema } from "src/schemas/assetsSchema";
import {
	getPresignedUploadUrl,
	completeAssetUpload,
	getUserAssets,
} from "src/controllers/assetsController";

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

router.get("/",authenticate,getUserAssets)

export default router;
