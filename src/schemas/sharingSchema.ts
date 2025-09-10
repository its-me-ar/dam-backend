import { z } from "zod";

export const createShareSchema = z.object({
	asset_id: z.string().uuid("Invalid asset ID"),
	share_type: z.enum(["PUBLIC", "RESTRICTED"]),
	user_ids: z.array(z.string().uuid("Invalid user ID")).optional(),
});

export const shareIdSchema = z.object({
	share_id: z.string().uuid("Invalid share ID"),
});

export const assetIdSchema = z.object({
	asset_id: z.string().uuid("Invalid asset ID"),
});

export const publicAssetSchema = z.object({
	share_token: z.string().min(1, "Share token is required"),
});

export const assetVisibilitySchema = z.object({
	asset_id: z.string().uuid("Invalid asset ID format"),
});
