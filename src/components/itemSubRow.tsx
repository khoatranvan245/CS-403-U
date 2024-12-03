import tableType from "@/types/tableType"

const ItemSubRow = ({ subRowData, isOpen, tableType }: { subRowData: Array<string | number>, isOpen: boolean, tableType: tableType }) => {
  switch (tableType) {
    case "hangHoa":
      return (
        <>
          <div className={`${isOpen ? "block" : "hidden"} w-full border border-black grid grid-cols-2`}> <p className="py-2">Mã hàng: {subRowData[1]}</p>
            <p className="py-3">Giá bán: {subRowData[2]}</p>
            <p className="py-3">Giá vốn: {subRowData[3]}</p>
            <p className="py-3">Tồn kho: {subRowData[4]}</p>
            <p className="py-3">Nhóm hàng: {subRowData[5]}</p>
            <p className="py-3">Vị trí: {subRowData[6]}</p>
            <p className="py-3">Nhà cung cấp: {subRowData[7]}</p>
          </div>
        </>
      )
  }
}

export default ItemSubRow

