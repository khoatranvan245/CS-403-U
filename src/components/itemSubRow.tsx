import ChiTietHoaDonType from "@/types/chiTietHoaDonType"
import tableType from "@/types/tableType"
import TableTitle from "./tableTitle"

const ItemSubRow = ({ subRowData, isOpen, tableType }: { subRowData: Array<any>, isOpen: boolean, tableType: tableType }) => {
  switch (tableType) {
    case "hangHoa":
      return (
        <div className={`${isOpen ? "block" : "hidden"} p-4 w-full mx-auto border border-black`}>
          <div className="grid grid-cols-2">
            <p className="py-3">Mã hàng: {subRowData[0]}</p>
            <p className="py-3">Giá bán: {subRowData[2]}</p>
            <p className="py-3">Giá vốn: {subRowData[3]}</p>
            <p className="py-3">Tồn kho: {subRowData[4]}</p>
            <p className="py-3">Nhóm hàng: {subRowData[5]}</p>
            <p className="py-3">Vị trí: {subRowData[6]}</p>
            <p className="py-3">Nhà cung cấp: {subRowData[7]}</p>
          </div>
          <button className="py-2 px-4 rounded text-white mr-2 bg-green-400 mt-4">Cập nhật</button>
          <button className="py-2 px-4 rounded text-white mr-2 bg-red-400">Xóa</button>
        </div>
      )

    case "hoaDon":
      const chiTietHoaDon = subRowData as ChiTietHoaDonType
      return (
        <div className={`${isOpen ? "block" : "hidden"} p-4 w-full mx-auto border border-black`}>
          <TableTitle tableType="chiTietHoaDon" />
          {chiTietHoaDon.map((item, index) =>
            <div key={index} className="grid grid-cols-[1fr,2fr,1fr,1fr,1fr]">
              <p className="text-center my-3">{item.HangHoa_ID}</p>
              <p className="text-center my-3">{item.HangHoa.TenHang}</p>
              <p className="text-center my-3">{item.SoLuong}</p>
              <p className="text-center my-3">{item.DonGia}</p>
              <p className="text-center my-3">{item.ThanhTien}</p>
            </div>
          )}
        </div>
      )
  }
}

export default ItemSubRow

