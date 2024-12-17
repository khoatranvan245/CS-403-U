import hangHoaType from "./hangHoaType";

type hoaDonType = {
  HoaDon_ID: string;
  NhanVien_ID: string;
  KhachHang_ID: string;
  ThoiGian: Date;
  TongTien: number;
  NhanVien: {
    NhanVien_ID: string,
    Email: string,
    MatKhau: string
  },
  KhachHang: {
    KhachHang_ID: string,
    TenKhachHang: string,
    SDT: string
  },
  ChiTietHoaDon: {
    HoaDon_ID: string,
    HangHoa_ID: string,
    SoLuong: number,
    DonGia: number,
    ThanhTien: number,
    HangHoa: hangHoaType
  }[]
};

export default hoaDonType;
