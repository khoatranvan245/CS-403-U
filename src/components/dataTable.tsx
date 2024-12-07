import prisma from "@/lib/prismaClient"
import ItemRow from "./itemRow"
import tableType from "@/types/tableType"
import Link from "next/link"
import TableTitle from "./tableTitle"

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
    case "hoaDon":
      data = await prisma.hoaDon.findMany({})
      break
  }

  console.log(data)
  return (
    <>
      <div className="w-[90%] mx-auto mt-2">
        <div className="flex justify-between">
          <input type="text" placeholder="Tìm kiếm" className="w-1/2 border border-black rounded pl-4" />
          <div className="flex gap-3">
            <Link href={"/manager/item/add"} className="bg-green-400 text-white p-3 rounded hover:bg-green-500">Thêm mới</Link>
            <button className="bg-green-400 text-white p-3 rounded hover:bg-green-500">Import</button>
            <button className="bg-green-400 text-white p-3 rounded hover:bg-green-500">Xuất file</button>
          </div>
        </div>
        <TableTitle tableType={tableType} />
        {data.map((item, index) => <ItemRow key={index} index={index} tableData={item} tableType={tableType} />)}
      </div>
    </>
  )
}

export default DataTable
