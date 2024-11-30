"use client"
import hangHoaType from "@/types/hangHoaType"
import tableType from "@/types/tableType"
import { useState } from "react"

const ItemRow = ({ index, tableData, tableType }: { tableData: any, index: number, tableType: tableType }) => {
  const [open, setOpen] = useState(false)
  let castData = {}
  let rowData: (string | number)[] = []
  switch (tableType) {
    case "hangHoa":
      castData = tableData as hangHoaType
      rowData = [(tableData as hangHoaType).HangHoa_ID, (tableData as hangHoaType).TenHang, (tableData as hangHoaType).GiaBan, (tableData as hangHoaType).GiaVon, (tableData as hangHoaType).TonKho]
  }
  console.log(castData)
  return <div onClick={() => setOpen(!open)}>
    <div
      className={`grid grid-cols-[1fr,2fr,1fr,1fr,1fr] w-full py-2 ${index % 2 == 0 ? 'bg-gray-200' : ''}`}
    >
      {rowData.map((item, index) => <p key={index} className="text-center">{item}</p>)}
    </div>
  </div>
}

export default ItemRow
