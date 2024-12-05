import prisma from "@/lib/prismaClient"
import AddForm from "./addForm"

const AddItem = async () => {
  const khoList = await prisma.kho.findMany({
    select: {
      Kho_ID: true,
      DiaChi: true
    }
  })
  const nhaCungCapList = await prisma.nhaCungCap.findMany({
    select: {
      NhaCungCap_ID: true,
      Ten: true
    }
  })

  const nhomHangList = await prisma.nhomHang.findMany({
    select: {
      NhomHang_ID: true,
      TenNhomHang: true
    }
  })

  return <AddForm nhomHangList={nhomHangList} nhaCungCapList={nhaCungCapList} khoList={khoList} />
}

export default AddItem
