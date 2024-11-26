/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `NhanVien` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Email]` on the table `QuanLy` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "NhanVien_Email_key" ON "NhanVien"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "QuanLy_Email_key" ON "QuanLy"("Email");
