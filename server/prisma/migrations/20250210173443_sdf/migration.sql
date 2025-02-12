/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - The required column `user_id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`user_id`);

-- CreateTable
CREATE TABLE `Organization` (
    `org_id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_external_name` VARCHAR(191) NOT NULL,
    `org_internal_name` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`org_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubOrganization` (
    `sub_org_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_external_name` VARCHAR(191) NOT NULL,
    `org_id` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`sub_org_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Services` (
    `service_id` INTEGER NOT NULL AUTO_INCREMENT,
    `service_internal_name` VARCHAR(191) NOT NULL,
    `service_external_name` VARCHAR(191) NOT NULL,
    `order_no` INTEGER NOT NULL,
    `disable` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_At` DATETIME(3) NOT NULL,

    PRIMARY KEY (`service_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrgServices` (
    `org_service_id` VARCHAR(191) NOT NULL,
    `service_id` INTEGER NOT NULL,
    `service_type` ENUM('TICKETING', 'TABLE', 'PRODUCT') NOT NULL,
    `org_user_id` INTEGER NOT NULL,
    `org_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`org_service_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Organization` ADD CONSTRAINT `Organization_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubOrganization` ADD CONSTRAINT `SubOrganization_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `Organization`(`org_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
