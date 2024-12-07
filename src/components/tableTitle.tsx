import tableType from "@/types/tableType";

const TableTitle = ({ tableType }: { tableType: tableType }) => {
  let titles: string[] = []
  switch (tableType) {
    case "hangHoa":
      titles = ["Mã hàng", "Tên hàng", "Giá bán", "Giá vốn", "Tồn kho"]
      break
    case "hoaDon":
      titles = ["Mã hóa đơn", "Khách hàng", "Nhân viên", "Ngày", "Tổng tiền"]
      break
  }
  return <div className="grid grid-cols-[1fr,2fr,1fr,1fr,1fr] bg-blue-200 py-3 mt-3">
    {titles.map((item, index) => <p className="text-center font-bold" key={index}>{item}</p>)}
  </div>
}

export default TableTitle
