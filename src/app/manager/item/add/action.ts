"use server";
import prisma from "@/lib/prismaClient";
import { z } from "zod";
const itemSchema = z.object({
  HangHoa_ID: z.string(),
  TenHang: z.string(),
  GiaBan: z.string(),
  GiaVon: z.string(),
  DonViTinh: z.string(),
  Kho_ID: z.string(),
  NhaCungCap_ID: z.string(),
  NhomHang_ID: z.string(),
  TonKho: z.string(),
});
const addItem = async (prevState: any, formData: FormData) => {
  const result = itemSchema.safeParse(Object.fromEntries(formData));

  console.log(result);
  if (!result.success) {
    return { error: result.error?.flatten().fieldErrors };
  }
  try {
    await prisma.hangHoa.create({
      data: {
        HangHoa_ID: result.data.HangHoa_ID,
        TenHang: result.data.TenHang,
        GiaBan: Number(result.data.GiaBan),
        GiaVon: Number(result.data.GiaVon),
        DonViTinh: result.data.DonViTinh,
        Kho_ID: result.data.Kho_ID,
        NhaCungCap_ID: result.data.NhaCungCap_ID,
        NhomHang_ID: result.data.NhomHang_ID,
        TonKho: Number(result.data.TonKho),
      },
    });
    return {success: "Thêm hàng hóa thành công"}
  } catch {
    return { failed: "Thêm hàng hóa thất bại" }
  }
};

export default addItem;
