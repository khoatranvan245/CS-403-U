"use server";
import prisma from "@/lib/prismaClient";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { z } from "zod";
const UserSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string(),
});

export const login = async (prevState: any, formData: FormData) => {
  const result = UserSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { errors: result.error?.flatten().fieldErrors };
  }

  const { email, password } = result.data;

  const quanLi = await prisma.quanLy.findUnique({
    where: {
      Email: email,
      MatKhau: password,
    },
    select: {
      QuanLi_ID: true,
    },
  });

  if (!quanLi)
    return {
      errors: { email: ["Invalid email or password"] },
    };

  await createSession(quanLi.QuanLi_ID);
  redirect("/manager");
};

export const logout = async () => {
  deleteSession();
  redirect("/login");
};
