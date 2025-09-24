"use server";

//간이 데이터 베이스
let TODOS: string[] = ["go to the Gym"];

//현재의 투두를 가져오는 함수
export const getTodos = async () => {
  return TODOS;
};

//새로운 투두 등록
export const createTodos = async (data: string) => {
  //sleep1
  await new Promise((resolve) => setTimeout(resolve, 1000));

  TODOS.push(data);
  return TODOS;
};
