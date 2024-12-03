import prisma from "@/lib/prismaClient"
import ItemRow from "./itemRow"
import tableType from "@/types/tableType"

const DataTable = async ({ tableType }: { tableType: tableType }) => {
  let data
  switch (tableType) {
    case "hangHoa":
      data = await prisma.hangHoa.findMany({
        include: {
          NhomHang: true
        },
      })
      break
    case "phieuNhap":
      data = await prisma.phieuNhap.findMany({})
      break
    case "phieuXuatKho":
      data = await prisma.phieuXuatKho.findMany({})
      break
  }
  console.log(data)
  return (
    <>
      <div className="w-[90%] mx-auto mt-2">
        <div className="flex justify-between">
          <input type="text" placeholder="Tìm kiếm" className="w-1/2 border border-black rounded pl-4" />
          <div className="flex gap-3">
            <button className="bg-green-400 text-white p-3 rounded hover:bg-green-500">Thêm mới</button>
            <button className="bg-green-400 text-white p-3 rounded hover:bg-green-500">Import</button>
            <button className="bg-green-400 text-white p-3 rounded hover:bg-green-500">Xuất file</button>
          </div>
        </div>

        <div className="grid grid-cols-[1fr,2fr,1fr,1fr,1fr] w-full bg-blue-200 py-3 mt-3">
          <p className="font-bold text-center">Mã hàng</p>
          <p className="font-bold text-center" >Tên hàng</p>
          <p className="font-bold text-center">Giá bán</p>
          <p className="font-bold text-center">Giá vốn</p>
          <p className="font-bold text-center">Tồn kho</p>
        </div>

        {data.map((item, index) => <ItemRow key={index} index={index} tableData={item} tableType={tableType} />)}
      </div>
    </>
  )
}

export default DataTable
