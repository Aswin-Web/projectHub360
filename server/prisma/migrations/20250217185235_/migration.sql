-- AlterTable
ALTER TABLE `OrgUsers` MODIFY `user_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `OrgUsers` ADD CONSTRAINT `OrgUsers_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
