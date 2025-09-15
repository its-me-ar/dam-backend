-- Add user_id column for RESTRICTED shares
ALTER TABLE "AssetShare" ADD COLUMN "user_id" TEXT;

-- Add foreign key constraint
ALTER TABLE "AssetShare" ADD CONSTRAINT "AssetShare_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Add index for user_id
CREATE INDEX "AssetShare_user_id_idx" ON "AssetShare"("user_id");
