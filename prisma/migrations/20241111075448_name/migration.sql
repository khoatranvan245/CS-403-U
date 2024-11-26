-- CreateTable
CREATE TABLE "ChiTietHoaDon" (
    "HoaDon_ID" VARCHAR(255) NOT NULL,
    "HangHoa_ID" VARCHAR(255) NOT NULL,
    "SoLuong" INTEGER,
    "ThanhTien" INTEGER,
    "DonGia" INTEGER,

    CONSTRAINT "ChiTietHoaDon_pkey" PRIMARY KEY ("HoaDon_ID","HangHoa_ID")
);

-- CreateTable
CREATE TABLE "ChiTietPhieuNhap" (
    "PhieuNhap_ID" VARCHAR(255) NOT NULL,
    "HangHoa_ID" VARCHAR(255) NOT NULL,
    "SoLuong" INTEGER,
    "DonGia" INTEGER,

    CONSTRAINT "ChiTietPhieuNhap_pkey" PRIMARY KEY ("PhieuNhap_ID","HangHoa_ID")
);

-- CreateTable
CREATE TABLE "ChiTietPhieuXuatKho" (
    "PhieuXuatKho_ID" VARCHAR(255) NOT NULL,
    "HangHoa_ID" VARCHAR(255) NOT NULL,
    "SoLuong" INTEGER,
    "DonGia" INTEGER,

    CONSTRAINT "ChiTietPhieuXuatKho_pkey" PRIMARY KEY ("PhieuXuatKho_ID","HangHoa_ID")
);

-- CreateTable
CREATE TABLE "HangHoa" (
    "HangHoa_ID" VARCHAR(255) NOT NULL,
    "TenHang" VARCHAR(255),
    "ThuongHieu" VARCHAR(255),
    "GiaBan" INTEGER,
    "GiaVon" INTEGER,
    "TonKho" INTEGER,
    "DonViTinh" VARCHAR(255),
    "NhomHang_ID" VARCHAR(255),
    "Kho_ID" VARCHAR(255),
    "NhaCungCap_ID" VARCHAR(255),

    CONSTRAINT "HangHoa_pkey" PRIMARY KEY ("HangHoa_ID")
);

-- CreateTable
CREATE TABLE "HoaDon" (
    "HoaDon_ID" VARCHAR(255) NOT NULL,
    "NhanVien_ID" VARCHAR(255),
    "KhachHang_ID" VARCHAR(255),
    "ThoiGian" TIMESTAMP(6),
    "TongTien" INTEGER,

    CONSTRAINT "HoaDon_pkey" PRIMARY KEY ("HoaDon_ID")
);

-- CreateTable
CREATE TABLE "KhachHang" (
    "KhachHang_ID" VARCHAR(255) NOT NULL,
    "TenKhachHang" VARCHAR(255),
    "SDT" VARCHAR(11),

    CONSTRAINT "KhachHang_pkey" PRIMARY KEY ("KhachHang_ID")
);

-- CreateTable
CREATE TABLE "Kho" (
    "Kho_ID" VARCHAR(255) NOT NULL,
    "DiaChi" VARCHAR(255),

    CONSTRAINT "Kho_pkey" PRIMARY KEY ("Kho_ID")
);

-- CreateTable
CREATE TABLE "NhaCungCap" (
    "NhaCungCap_ID" VARCHAR(255) NOT NULL,
    "Ten" VARCHAR(255),
    "SDT" VARCHAR(11),
    "MaSoThue" VARCHAR(255),

    CONSTRAINT "NhaCungCap_pkey" PRIMARY KEY ("NhaCungCap_ID")
);

-- CreateTable
CREATE TABLE "NhanVien" (
    "NhanVien_ID" VARCHAR(255) NOT NULL,
    "Email" VARCHAR(255),
    "MatKhau" VARCHAR(255),

    CONSTRAINT "NhanVien_pkey" PRIMARY KEY ("NhanVien_ID")
);

-- CreateTable
CREATE TABLE "NhomHang" (
    "NhomHang_ID" VARCHAR(255) NOT NULL,
    "TenNhomHang" VARCHAR(255),

    CONSTRAINT "NhomHang_pkey" PRIMARY KEY ("NhomHang_ID")
);

-- CreateTable
CREATE TABLE "PhieuChi" (
    "PhieuChi_ID" VARCHAR(255) NOT NULL,
    "NhanVien_ID" VARCHAR(255),
    "NhaCungCap_ID" VARCHAR(255),
    "GiaTri" INTEGER,
    "ThoiGian" TIMESTAMP(6),

    CONSTRAINT "PhieuChi_pkey" PRIMARY KEY ("PhieuChi_ID")
);

-- CreateTable
CREATE TABLE "PhieuLuong" (
    "PhieuLuong_ID" VARCHAR(255) NOT NULL,
    "NhanVien_ID" VARCHAR(255),
    "LuongCoBan" INTEGER,
    "SoGio" INTEGER,
    "HoaHong" DOUBLE PRECISION,
    "ThanhTien" INTEGER,
    "ThoiGian" TIMESTAMP(6),

    CONSTRAINT "PhieuLuong_pkey" PRIMARY KEY ("PhieuLuong_ID")
);

-- CreateTable
CREATE TABLE "PhieuNhap" (
    "PhieuNhap_ID" VARCHAR(255) NOT NULL,
    "NhanVien_ID" VARCHAR(255),
    "NhaCungCap_ID" VARCHAR(255),
    "ThoiGian" TIMESTAMP(6),

    CONSTRAINT "PhieuNhap_pkey" PRIMARY KEY ("PhieuNhap_ID")
);

-- CreateTable
CREATE TABLE "PhieuXuatKho" (
    "PhieuXuatKho_ID" VARCHAR(255) NOT NULL,
    "NhanVien_ID" VARCHAR(255),
    "Kho_ID" VARCHAR(255),
    "ThoiGian" TIMESTAMP(6),

    CONSTRAINT "PhieuXuatKho_pkey" PRIMARY KEY ("PhieuXuatKho_ID")
);

-- CreateTable
CREATE TABLE "QuanLy" (
    "QuanLi_ID" VARCHAR(255) NOT NULL,
    "Email" VARCHAR(255),
    "MatKhau" VARCHAR(255),

    CONSTRAINT "QuanLy_pkey" PRIMARY KEY ("QuanLi_ID")
);

-- AddForeignKey
ALTER TABLE "ChiTietHoaDon" ADD CONSTRAINT "ChiTietHoaDon_HangHoa_ID_fkey" FOREIGN KEY ("HangHoa_ID") REFERENCES "HangHoa"("HangHoa_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ChiTietHoaDon" ADD CONSTRAINT "ChiTietHoaDon_HoaDon_ID_fkey" FOREIGN KEY ("HoaDon_ID") REFERENCES "HoaDon"("HoaDon_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ChiTietPhieuNhap" ADD CONSTRAINT "ChiTietPhieuNhap_HangHoa_ID_fkey" FOREIGN KEY ("HangHoa_ID") REFERENCES "HangHoa"("HangHoa_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ChiTietPhieuNhap" ADD CONSTRAINT "ChiTietPhieuNhap_PhieuNhap_ID_fkey" FOREIGN KEY ("PhieuNhap_ID") REFERENCES "PhieuNhap"("PhieuNhap_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ChiTietPhieuXuatKho" ADD CONSTRAINT "ChiTietPhieuXuatKho_HangHoa_ID_fkey" FOREIGN KEY ("HangHoa_ID") REFERENCES "HangHoa"("HangHoa_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ChiTietPhieuXuatKho" ADD CONSTRAINT "ChiTietPhieuXuatKho_PhieuXuatKho_ID_fkey" FOREIGN KEY ("PhieuXuatKho_ID") REFERENCES "PhieuXuatKho"("PhieuXuatKho_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HangHoa" ADD CONSTRAINT "HangHoa_Kho_ID_fkey" FOREIGN KEY ("Kho_ID") REFERENCES "Kho"("Kho_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HangHoa" ADD CONSTRAINT "HangHoa_NhaCungCap_ID_fkey" FOREIGN KEY ("NhaCungCap_ID") REFERENCES "NhaCungCap"("NhaCungCap_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HangHoa" ADD CONSTRAINT "HangHoa_NhomHang_ID_fkey" FOREIGN KEY ("NhomHang_ID") REFERENCES "NhomHang"("NhomHang_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HoaDon" ADD CONSTRAINT "HoaDon_KhachHang_ID_fkey" FOREIGN KEY ("KhachHang_ID") REFERENCES "KhachHang"("KhachHang_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HoaDon" ADD CONSTRAINT "HoaDon_NhanVien_ID_fkey" FOREIGN KEY ("NhanVien_ID") REFERENCES "NhanVien"("NhanVien_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PhieuChi" ADD CONSTRAINT "PhieuChi_NhaCungCap_ID_fkey" FOREIGN KEY ("NhaCungCap_ID") REFERENCES "NhaCungCap"("NhaCungCap_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PhieuChi" ADD CONSTRAINT "PhieuChi_NhanVien_ID_fkey" FOREIGN KEY ("NhanVien_ID") REFERENCES "NhanVien"("NhanVien_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PhieuLuong" ADD CONSTRAINT "PhieuLuong_NhanVien_ID_fkey" FOREIGN KEY ("NhanVien_ID") REFERENCES "NhanVien"("NhanVien_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PhieuNhap" ADD CONSTRAINT "PhieuNhap_NhaCungCap_ID_fkey" FOREIGN KEY ("NhaCungCap_ID") REFERENCES "NhaCungCap"("NhaCungCap_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PhieuNhap" ADD CONSTRAINT "PhieuNhap_NhanVien_ID_fkey" FOREIGN KEY ("NhanVien_ID") REFERENCES "NhanVien"("NhanVien_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PhieuXuatKho" ADD CONSTRAINT "PhieuXuatKho_Kho_ID_fkey" FOREIGN KEY ("Kho_ID") REFERENCES "Kho"("Kho_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PhieuXuatKho" ADD CONSTRAINT "PhieuXuatKho_NhanVien_ID_fkey" FOREIGN KEY ("NhanVien_ID") REFERENCES "NhanVien"("NhanVien_ID") ON DELETE NO ACTION ON UPDATE NO ACTION;
