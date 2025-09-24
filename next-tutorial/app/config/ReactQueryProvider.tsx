"use client";

import { QueryClient, QueryClientProvider } from "react-query";

//클라이언트 단에서 데이터를 관리할 수 있는 제일 큰 스토어같은 개념
export const queryClient = new QueryClient();

export default function ReactQueryProvider({ children }) {
  return (
    // 프로바이더에 클라이언트 값을 주입한다.
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
