-- CreateEnum
CREATE TYPE "public"."JobStatus" AS ENUM ('PENDING', 'ACTIVE', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "public"."TranscodingJob" (
    "id" TEXT NOT NULL,
    "asset_id" TEXT NOT NULL,
    "job_id" TEXT NOT NULL,
    "status" "public"."JobStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TranscodingJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TranscodingJob_job_id_key" ON "public"."TranscodingJob"("job_id");

-- CreateIndex
CREATE INDEX "TranscodingJob_asset_id_idx" ON "public"."TranscodingJob"("asset_id");

-- AddForeignKey
ALTER TABLE "public"."TranscodingJob" ADD CONSTRAINT "TranscodingJob_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "public"."Asset"("asset_id") ON DELETE RESTRICT ON UPDATE CASCADE;
