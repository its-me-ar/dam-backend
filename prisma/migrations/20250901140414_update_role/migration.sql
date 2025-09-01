/*
  Warnings:

  - Added the required column `role` to the `Invitation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."InvitationRole" AS ENUM ('USER', 'MANAGER');

-- AlterTable
ALTER TABLE "public"."Invitation" ADD COLUMN     "role" "public"."InvitationRole" NOT NULL,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;
