import { PrismaClient } from "generated/prisma";

const prisma = new PrismaClient();

export async function upsertImageMetadata(
	asset_id: string,
	variant: string, // "original", "thumbnail", etc.
	s3Path: string,
	metadata: { width: number; height: number; size: number },
) {
	const row = await prisma.assetMetadata.findFirst({
		where: { asset_id, key: "image_variants" },
	});

	const existing: any = row?.value || {}; // eslint-disable-line @typescript-eslint/no-explicit-any

	if (variant === "thumbnail") {
		existing.thumbnails = existing.thumbnails || [];
		existing.thumbnails.push({ path: s3Path, ...metadata });
	} else {
		existing[variant] = { path: s3Path, ...metadata };
	}

	await prisma.assetMetadata.upsert({
		where: { asset_id_key: { asset_id, key: "image_variants" } },
		update: { value: existing },
		create: { asset_id, key: "image_variants", value: existing },
	});
}
