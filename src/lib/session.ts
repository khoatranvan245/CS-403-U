// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const encodedKey = new TextEncoder().encode(process.env.ACCESS_TOKEN);
type SessionPayload = {
  userId: string;
  expiresAt: Date;
};
const encrypt = async (payload: SessionPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
};

export const decrypt = async (session: string | undefined = "") => {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (err) {
    console.log(err);
  }
};

export const createSession = async (userId: string) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });

  await cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
};

export const deleteSession = () => {
  cookies().delete("session");
};
