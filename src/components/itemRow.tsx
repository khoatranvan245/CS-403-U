"use client"
import hangHoaType from "@/types/hangHoaType"
import tableType from "@/types/tableType"
import { useState } from "react"
import ItemSubRow from "./itemSubRow"

const ItemRow = ({ index, tableData, tableType }: { tableData: any, index: number, tableType: tableType }) => {
  const [open, setOpen] = useState(false)
  let hangHoaData = tableData as hangHoaType
  let rowData: (string | number)[] = []
  let subRowData: (string | number)[] = []
  switch (tableType) {
    case "hangHoa":
      rowData = [hangHoaData.TenHang, hangHoaData.HangHoa_ID, hangHoaData.GiaBan, hangHoaData.GiaVon, hangHoaData.TonKho]
      subRowData = [...rowData, hangHoaData.NhomHang.TenNhomHang, hangHoaData.Kho_ID, hangHoaData.NhaCungCap_ID]
  }
  return <div onClick={() => setOpen(!open)}>
    <div
      className={`grid grid-cols-[1fr,2fr,1fr,1fr,1fr] w-full py-2 ${open ? 'bg-green-200' : index % 2 == 0 ? 'bg-gray-200' : ''}`}
    >
      {rowData.map((item, index) => <p key={index} className="text-center">{item}</p>)}
    </div>

    <ItemSubRow isOpen={open} subRowData={subRowData} tableType={tableType} />
  </div>
}

export default ItemRow
