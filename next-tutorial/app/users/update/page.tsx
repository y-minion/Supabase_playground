"use client";

import { userState } from "@/app/recoil/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function UserUpdatePage() {
  const [user, setUser] = useRecoilState(userState);
  //   const [user,setUser] = useState([]) --> 기존의 useState의 훅과 매우 유사함을 할 수 있다.

  return (
    <div>
      <h1>Update User Page</h1>
      <input
        type="email"
        placeholder="Enter yout Email"
        value={user.email}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Enter yout name"
        value={user.name}
        onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
      />
      <footer>
        <Link href={"/users/updated-user"}> Check Updated Result</Link>
      </footer>
    </div>
  );
}
