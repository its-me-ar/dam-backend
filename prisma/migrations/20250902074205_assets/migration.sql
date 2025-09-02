-- CreateEnum
CREATE TYPE "public"."AssetStatus" AS ENUM ('START', 'COMPLETED');

-- CreateTable
CREATE TABLE "public"."Asset" (
    "asset_id" TEXT NOT NULL,
    "filename" VARCHAR(255) NOT NULL,
    "mime_type" VARCHAR(50) NOT NULL,
    "storage_path" VARCHAR(255) NOT NULL,
    "uploader_id" TEXT NOT NULL,
    "group_id" TEXT,
    "size_bytes" INTEGER NOT NULL,
    "status" "public"."AssetStatus" NOT NULL DEFAULT 'START',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("asset_id")
);

-- CreateTable
CREATE TABLE "public"."AssetMetadata" (
    "metadata_id" TEXT NOT NULL,
    "asset_id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetMetadata_pkey" PRIMARY KEY ("metadata_id")
);

-- AddForeignKey
ALTER TABLE "public"."Asset" ADD CONSTRAINT "Asset_uploader_id_fkey" FOREIGN KEY ("uploader_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AssetMetadata" ADD CONSTRAINT "AssetMetadata_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "public"."Asset"("asset_id") ON DELETE RESTRICT ON UPDATE CASCADE;
