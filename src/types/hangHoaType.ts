type hangHoaType = {
  HangHoa_ID: string;
  TenHang: string;
  GiaBan: number;
  GiaVon: number;
  TonKho: number;
  Kho_ID: string;
  NhaCungCap_ID: string;
  NhomHang_ID: string;
  DonViTinh: string;
  NhomHang: {
    NhomHang_ID: string
    TenNhomHang: string
  }
};

export default hangHoaType;
