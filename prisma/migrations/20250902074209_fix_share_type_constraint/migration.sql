-- Drop the existing check constraint
ALTER TABLE "AssetShare" DROP CONSTRAINT IF EXISTS "AssetShare_share_type_check";

-- Add a new check constraint that allows PUBLIC and RESTRICTED
ALTER TABLE "AssetShare" ADD CONSTRAINT "AssetShare_share_type_check" CHECK (share_type IN ('PUBLIC', 'RESTRICTED'));
