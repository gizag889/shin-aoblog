"use server";
 
import { cookies } from "next/headers";
 
export async function getUserToken() {
  const store = await cookies();
 
  // Cookieからトークンを取得
  const userToken = store.get("userToken")?.value;
  return userToken;
}
 
export async function setUserToken() {
  const store = await cookies();
 
  const userToken = crypto.randomUUID();
 
  // サーバーサイドでCookieをセット
  store.set({
    name: "userToken",
    value: userToken,
    httpOnly: true, // セキュリティのためHttpOnly
    sameSite: "strict", // CSRFプロテクション
    maxAge: 60 * 60 * 24 * 365, // 1年間
  });
  return userToken;
}