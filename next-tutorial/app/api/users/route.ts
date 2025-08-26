import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    users: [
      { id: 1, name: "홍길동" },
      { id: 2, name: "이정환" },
      { id: 3, name: "김철수" },
    ],
  });
}
