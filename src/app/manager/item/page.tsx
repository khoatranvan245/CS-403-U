import DataTable from "@/components/dataTable"
import prisma from "@/lib/prismaClient"
const Item = async () => {
  const data = await prisma.hangHoa.findMany()

  return (
    <>
      <div className="w-[90%] mx-auto mt-2">
        <DataTable tableType="hangHoa" />
      </div >
    </>
  )
}

export default Item
