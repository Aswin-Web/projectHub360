-- AlterTable
ALTER TABLE `Organization` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `update_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
