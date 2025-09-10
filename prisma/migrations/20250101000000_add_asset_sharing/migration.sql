-- CreateEnum
CREATE TYPE "SharePermission" AS ENUM ('VIEW', 'DOWNLOAD', 'EDIT');

-- CreateEnum
CREATE TYPE "ShareType" AS ENUM ('PUBLIC', 'PRIVATE', 'RESTRICTED');

-- CreateTable
CREATE TABLE "AssetShare" (
    "id" TEXT NOT NULL,
    "asset_id" TEXT NOT NULL,
    "shared_by" TEXT NOT NULL,
    "share_type" "ShareType" NOT NULL DEFAULT 'PRIVATE',
    "permission" "SharePermission" NOT NULL DEFAULT 'VIEW',
    "expires_at" TIMESTAMP(3),
    "password" TEXT,
    "share_token" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetShare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetShareUser" (
    "id" TEXT NOT NULL,
    "share_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "permission" "SharePermission" NOT NULL DEFAULT 'VIEW',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AssetShareUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AssetShare_share_token_key" ON "AssetShare"("share_token");

-- CreateIndex
CREATE INDEX "AssetShare_asset_id_idx" ON "AssetShare"("asset_id");

-- CreateIndex
CREATE INDEX "AssetShare_shared_by_idx" ON "AssetShare"("shared_by");

-- CreateIndex
CREATE INDEX "AssetShareUser_share_id_idx" ON "AssetShareUser"("share_id");

-- CreateIndex
CREATE INDEX "AssetShareUser_user_id_idx" ON "AssetShareUser"("user_id");

-- AddForeignKey
ALTER TABLE "AssetShare" ADD CONSTRAINT "AssetShare_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "Asset"("asset_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetShare" ADD CONSTRAINT "AssetShare_shared_by_fkey" FOREIGN KEY ("shared_by") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetShareUser" ADD CONSTRAINT "AssetShareUser_share_id_fkey" FOREIGN KEY ("share_id") REFERENCES "AssetShare"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetShareUser" ADD CONSTRAINT "AssetShareUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
