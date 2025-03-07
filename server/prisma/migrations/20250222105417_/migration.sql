-- CreateTable
CREATE TABLE `SubOrgServices` (
    `sub_org_service_id` VARCHAR(191) NOT NULL,
    `org_service_id` VARCHAR(191) NOT NULL,
    `org_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`sub_org_service_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubOrgServices` ADD CONSTRAINT `SubOrgServices_org_service_id_fkey` FOREIGN KEY (`org_service_id`) REFERENCES `OrgServices`(`org_service_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubOrgServices` ADD CONSTRAINT `SubOrgServices_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `Organization`(`org_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
