"use client";

import { useMutation, useQuery } from "react-query";
import { createTodos, getTodos } from "../actions/todo-actions";
import { useState } from "react";
import { queryClient } from "../config/ReactQueryProvider";

export default function TodosPage() {
  const [todoInput, setTodoInput] = useState("");

  //클라이언트에서 데이터를 가져오는 작업은 useQuery를 사용하자
  const todoQuery = useQuery({
    queryKey: ["todos"], //브라우저에서 캐싱을 할때 어떤 키값으로 분류를 할 건지 지정해 준다. 즉 배열 안에 들어오는 모든 값은 캐싱을 분류해주는 키값이다.
    queryFn: () => getTodos(), //실제 데이터를 가져오는 함수이다. 여기서는 서버액션에서 정의한 데이터를 가져오는 함수를 전달한다.
  });

  const createTodoMutation = useMutation({
    mutationFn: async () => {
      // 빈값을 입력 할 경우 에러를 던지기만 하면 된다. 그러면 onError속성이 해당 상태를 구독하는 것처럼 반응한다.
      if (todoInput === "") throw new Error("TODO를 입력해 주세요");
      return createTodos(todoInput);
    },

    // mutationFn함수에서 전달받은 반환값이 onSuccess의 매개변수로 들어온다.
    onSuccess: (TODOS) => {
      //연관된 쿼리를 가져다가 리패치를 요청한다
      //   todoQuery.refetch(); -> 기본적으로 성공하면 데이터를 불어오는 useQuery의 반환값으로부터 **다시 투두 데이터를 "받아와야" 하기떄문에 리패치 요청을 한다**
      // 이때 해당 페이지가 아니라 다른 페이지에서도 todo값들을 사용하고 싶을 수 있다, 이때는 queryClient.invalidateQueries 사용한다.
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error: any) => {
      alert(error.message);
    },
  });

  return (
    <div>
      <h1>TODOS</h1>

      {/* TODO를 생성하는 부분 */}
      <input
        type="text"
        placeholder="Enter TODO"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />

      {/* 클릭 이벤트 발생시 createTodoMutation의 Mutate메서드를 실행 하도록 한다. */}
      <button onClick={() => createTodoMutation.mutate()}>
        {/* useMutation 또한 isLoading 속성을 제공한다. */}
        {createTodoMutation.isLoading ? "생성중..." : "투두 생성"}
      </button>
      {/* TODO를 보여주는 부분 */}
      {todoQuery.isLoading && <p>Loading....</p>}
      {todoQuery.data &&
        todoQuery.data.map((todo, idx) => <div key={idx}>{todo}</div>)}
    </div>
  );
}
