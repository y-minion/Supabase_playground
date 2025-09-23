"use client";

import { userState } from "@/app/recoil/atoms";
import { useRecoilState } from "recoil";

export default function UserUpdatePage() {
  const [user, setUser] = useRecoilState(userState);
  //   const [user,setUser] = useState([]) --> 기존의 useState의 훅과 매우 유사함을 할 수 있다.
}
