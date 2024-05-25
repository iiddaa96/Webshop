/*
  Warnings:

  - You are about to alter the column `subTotal` on the `OrderDetails` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "OrderDetails" ALTER COLUMN "subTotal" SET DATA TYPE INTEGER;
