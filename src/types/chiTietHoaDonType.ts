import hangHoaType from "./hangHoaType";

type ChiTietHoaDonType = {
  HoaDon_ID: string;
  HangHoa_ID: string;
  SoLuong: number;
  DonGia: number;
  ThanhTien: number;
  HangHoa: hangHoaType;
}[];

export default ChiTietHoaDonType;
