-- AlterTable
ALTER TABLE "public"."Session" ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("sessionToken");

-- DropIndex
DROP INDEX "public"."Session_sessionToken_key";

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(6);
