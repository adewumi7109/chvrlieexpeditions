/*
  Warnings:

  - You are about to drop the column `user_id` on the `Products` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Products_user_id_key";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "user_id";
