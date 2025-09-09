-- AlterTable
ALTER TABLE "public"."TranscodingJob" ADD COLUMN     "event_name" TEXT NOT NULL DEFAULT 'enqueued',
ADD COLUMN     "worker_name" TEXT NOT NULL DEFAULT 'unknown';
