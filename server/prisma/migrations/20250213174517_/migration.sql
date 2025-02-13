-- CreateTable
CREATE TABLE `OrgUsers` (
    `org_user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`org_user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubOrganization` ADD CONSTRAINT `SubOrganization_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrgServices` ADD CONSTRAINT `OrgServices_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `Organization`(`org_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrgServices` ADD CONSTRAINT `OrgServices_org_user_id_fkey` FOREIGN KEY (`org_user_id`) REFERENCES `OrgUsers`(`org_user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrgServices` ADD CONSTRAINT `OrgServices_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `Services`(`service_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
