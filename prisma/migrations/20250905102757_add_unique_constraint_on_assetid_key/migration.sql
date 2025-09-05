/*
  Warnings:

  - A unique constraint covering the columns `[asset_id,key]` on the table `AssetMetadata` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AssetMetadata_asset_id_key_key" ON "public"."AssetMetadata"("asset_id", "key");
