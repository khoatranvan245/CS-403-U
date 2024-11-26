"use client"
import { useActionState } from "react"
import { login } from "./actions"

const Login = () => {
  const [formState, loginAction] = useActionState(login, undefined)
  return (
    <>
      <div className="w-full h-screen bg-[#f2f6ff]">
        <form className="w-[600px] h-[350px] bg-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg flex flex-col shadow-lg px-12" action={loginAction}>
          <h1 className="text-[30px] text-center my-7">Đăng nhập</h1>
          <input type="email" placeholder="Email" className="border-gray-200 border-b-2 py-2 my-3 focus:border-blue-500" name="email" />
          <input type="password" placeholder="Mật khẩu" className="border-gray-200 border-b-2 py-2 my-3 focus:border-blue-500" name="password" />
          {formState?.errors.email && <h1 className="text-red-500">{formState.errors.email}</h1>}
          <div className="w-3/4 h-[60px] flex mx-auto mt-7">
            <button type="submit" className="flex-1 bg-blue-500 text-white text-base font-medium hover:bg-blue-700">Quản lí</button>
            <button type="submit" className="flex-1 bg-green-500 text-white text-base font-medium hover:bg-green-700">Bán hàng</button>
          </div>
        </form>
      </div>
    </>)
}

export default Login
