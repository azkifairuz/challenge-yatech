-- CreateTable
CREATE TABLE `Patient` (
    `id` VARCHAR(191) NOT NULL,
    `namaPasien` VARCHAR(191) NOT NULL,
    `tanggalPengobatan` DATETIME(3) NOT NULL,
    `Keluhan` VARCHAR(191) NOT NULL,
    `ResepObat` VARCHAR(191) NOT NULL,
    `Biaya` DOUBLE NOT NULL,
    `usesInsurance` BOOLEAN NOT NULL DEFAULT false,
    `insuranceName` VARCHAR(191) NULL,
    `coveredCost` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
