// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";
import { cookies } from "next/headers";

const publicRoute = ["/login"]
const middleware = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  
  const cookie = await cookies().get("session")?.value
  const session = await decrypt(cookie);

  if (path.startsWith("/manager") && !session?.userId){
    return NextResponse.redirect(new URL("/login", req.nextUrl))
  }

  if ((publicRoute.includes(path) && session?.userId) || path === "/"){
    return NextResponse.redirect(new URL("/manager", req.nextUrl))
  }

  return NextResponse.next();
};

export default middleware;
