-- Drop existing complex sharing tables
DROP TABLE IF EXISTS "AssetShareUser" CASCADE;
DROP TABLE IF EXISTS "AssetShare" CASCADE;

-- Drop enums
DROP TYPE IF EXISTS "SharePermission";
DROP TYPE IF EXISTS "ShareType";

-- Create simple sharing table
CREATE TABLE "AssetShare" (
    "id" TEXT NOT NULL,
    "asset_id" TEXT NOT NULL,
    "shared_by" TEXT NOT NULL,
    "share_type" TEXT NOT NULL CHECK (share_type IN ('PUBLIC', 'PRIVATE')),
    "share_token" TEXT NOT NULL UNIQUE,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetShare_pkey" PRIMARY KEY ("id")
);

-- Create indexes
CREATE INDEX "AssetShare_asset_id_idx" ON "AssetShare"("asset_id");
CREATE INDEX "AssetShare_shared_by_idx" ON "AssetShare"("shared_by");
CREATE INDEX "AssetShare_share_token_idx" ON "AssetShare"("share_token");

-- Add foreign keys
ALTER TABLE "AssetShare" ADD CONSTRAINT "AssetShare_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "Asset"("asset_id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AssetShare" ADD CONSTRAINT "AssetShare_shared_by_fkey" FOREIGN KEY ("shared_by") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
