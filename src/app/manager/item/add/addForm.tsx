"use client"
import { useActionState } from "react"
import addItem from "./action"
type AddFormProp = {
  nhaCungCapList: Array<{
    NhaCungCap_ID: string,
    Ten: string | null
  }>,
  nhomHangList: Array<{
    NhomHang_ID: string
    TenNhomHang: string | null
    ,
  }>,
  khoList: Array<{
    Kho_ID: string
    DiaChi: string | null
  }>
}

const AddForm = ({ nhaCungCapList, nhomHangList, khoList }: AddFormProp) => {
  const [formState, add] = useActionState(addItem, undefined)
  return <form action={add}>
    <div className="mx-auto w-2/3 ">
      <div className="grid grid-cols-2">
        <div>
          <p className="font-bold mt-3">Mã hàng</p>
          <input className="border border-black p-2 w-2/3" type="text" placeholder="Mã hàng" name="HangHoa_ID" required />

          <p className="font-bold mt-3">Tên hàng</p>
          <input className="border border-black p-2 w-2/3" type="text" placeholder="Tên hàng" name="TenHang" required />

          <p className="font-bold mt-3">Giá bán</p>
          <input className="border border-black p-2 w-2/3" type="number" placeholder="Giá bán" name="GiaBan" required />

          <p className="font-bold mt-3">Giá vốn</p>
          <input className="border border-black p-2 w-2/3" type="number" placeholder="Giá vốn" name="GiaVon" required />

          <p className="font-bold mt-3">Đơn vị tính</p>
          <input className="border border-black p-2 w-2/3" type="string" placeholder="Đơn vị tính" name="DonViTinh" required />

          <p className="font-bold mt-3">Tồn kho</p>
          <input className="border border-black p-2 w-2/3" type="number" placeholder="Tồn kho" name="TonKho" required />
        </div>

        <div>
          <p className="font-bold mt-3">Nhóm hàng</p>
          <select className="border border-black w-2/3" name="NhomHang_ID">
            {nhomHangList.map((item, index) => <option value={item.NhomHang_ID} key={index}>{item.TenNhomHang}</option>)}
          </select>

          <p className="font-bold mt-3">Nhà cung cấp</p>
          <select className="border border-black w-2/3" name="NhaCungCap_ID">
            {nhaCungCapList.map((item, index) => <option value={item.NhaCungCap_ID} key={index}>{item.Ten}</option>)}
          </select>

          <p className="font-bold mt-3">Kho</p>
          <select className="border border-black w-2/3" name="Kho_ID">
            {khoList.map((item, index) => <option value={item.Kho_ID} key={index}>{item.DiaChi}</option>)}
          </select>
        </div>
      </div>
      {formState?.failed && <p className="text-red-500 font-bold text-center">{formState.failed}</p>}
      {formState?.success && <p className="text-green-500 font-bold text-center">{formState.success}</p>}
      <button className="bg-green-400 text-white mt-3 p-3 rounded hover:bg-green-500 w-[200px] mx-auto" type="submit">Thêm mới</button>
    </div>
  </form>
}

export default AddForm
