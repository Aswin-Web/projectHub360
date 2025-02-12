/*
  Warnings:

  - Added the required column `service_descp` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_icon` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Services` ADD COLUMN `service_descp` VARCHAR(191) NOT NULL,
    ADD COLUMN `service_icon` VARCHAR(191) NOT NULL;
