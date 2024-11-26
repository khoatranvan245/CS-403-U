import prisma from "@/lib/prismaClient";
const Manager = async () => {
  const quanLi = await prisma.quanLy.findUnique({
    where: {
      Email: "admin@gmail.com",
      MatKhau: "admin",
    },
    select: {
      QuanLi_ID: true,
    },
  });
  console.log(quanLi)

  return <h1>Hello world</h1>
}

export default Manager
