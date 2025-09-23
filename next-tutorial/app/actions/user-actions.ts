"use server";

export async function searchUsers(name: string) {
  const DB = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "이정환" },
    { id: 3, name: "김철수" },
  ];
  return DB.filter((user) => user.name.includes(name));
}
