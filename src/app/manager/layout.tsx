import Link from "next/link"
import { logout } from "../login/actions";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full h-[52px] text-white bg-blue-500 flex px-5 navBar">
        <div>
          <Link className="inline-flex h-full px-[30px] items-center hover:bg-blue-700 rounded" href="/manager">Tổng quát </Link>

          <div className="inline-flex h-full px-[30px] items-center hover:bg-blue-700 rounded relative navItem">
            Hàng hóa
            <div className="flex flex-col bg-blue-700 absolute w-[200px] top-[100%] left-0 py-3 rounded subNavbar">
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="/manager/item">Danh mục</Link>
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Thiết lập giá</Link>
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Kiểm kho</Link>
            </div>
          </div>

          <div className="inline-flex h-full px-[30px] items-center hover:bg-blue-700 rounded relative navItem">
            Giao dịch
            <div className="flex flex-col bg-blue-700 absolute w-[200px] top-[100%] left-0 py-3 rounded subNavbar">
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="/manager/bill">Hóa đơn</Link>
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Nhập hàng</Link>
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Trả hàng</Link>
            </div>
          </div>

          <div className="inline-flex h-full px-[30px] items-center hover:bg-blue-700 rounded relative navItem">
            Đối tác
            <div className="flex flex-col bg-blue-700 absolute w-[200px] top-[100%] left-0 py-3 rounded subNavbar">
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Khách hàng</Link>
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Nhà cung cấp</Link>
            </div>
          </div>

          <div className="inline-flex h-full px-[30px] items-center hover:bg-blue-700 rounded relative navItem">
            Nhân viên
            <div className="flex flex-col bg-blue-700 absolute w-[200px] top-[100%] left-0 py-3 rounded subNavbar">
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Danh sách</Link>
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Lịch làm việc</Link>
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Bảng tính lương</Link>
            </div>
          </div>

          <div className="inline-flex h-full px-[30px] items-center hover:bg-blue-700 rounded relative navItem">
            Báo cáo
            <div className="flex flex-col bg-blue-700 absolute w-[200px] top-[100%] left-0 py-3 rounded subNavbar">
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Bán hàng</Link>
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Hàng hóa</Link>
            </div>
          </div>
        </div>

        <div className="ml-auto">
          <div className="inline-flex h-full px-[30px] items-center hover:bg-blue-700 rounded relative navItem">
            Admin
            <div className="flex flex-col bg-blue-700 absolute w-[200px] top-[100%] right-0 py-3 rounded subNavbar">
              <Link className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full" href="">Tài khoản</Link>
              <div className="inline-flex h-[40px] px-[30px] items-center hover:bg-blue-500 w-full cursor-pointer" onClick={logout}>Đăng xuất</div>
            </div>
          </div>
        </div>
      </div>

      {children}
    </>
  )
}

export default Layout
