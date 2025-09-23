import { NextResponse } from "next/server";

const DB = [
  { id: 1, name: "홍길동" },
  { id: 2, name: "이정환" },
  { id: 3, name: "김철수" },
];
export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const name = searchParams.get("name") as string;
  return NextResponse.json({
    users: DB.filter((user) => user.name.includes(name)),
  });
}
