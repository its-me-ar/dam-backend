import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { S3Service } from "../src/services/S3Service";
import { PutBucketPolicyCommand } from "@aws-sdk/client-s3";
import logger from "../src/config/logger";

dotenv.config();

async function applyBucketPolicy() {
  const s3Service = new S3Service();
  const bucket = process.env.MINIO_BUCKET_NAME!;

  try {
    // Path to policy JSON
    const policyPath = path.resolve(__dirname, "../policy/thumbnail-policy.json");

    if (!fs.existsSync(policyPath)) {
      logger.error(`[BucketPolicy] ❌ Policy file not found: ${policyPath}`);
      return;
    }

    const policyJson = fs.readFileSync(policyPath, "utf-8");

    // Apply policy using AWS SDK
    await s3Service["client"].send(
      new PutBucketPolicyCommand({
        Bucket: bucket,
        Policy: policyJson,
      })
    );

    logger.info(`[BucketPolicy] ✅ Policy applied successfully to bucket: ${bucket}`);
  } catch (err: unknown) {
    if (err instanceof Error) {
      logger.error(`[BucketPolicy] ❌ Failed to apply bucket policy: ${err.message}`);
    } else {
      logger.error(`[BucketPolicy] ❌ Failed to apply bucket policy: Unknown error`);
    }
  }
}

// Execute the script
applyBucketPolicy().then(() => logger.info("[BucketPolicy] Script finished"));
