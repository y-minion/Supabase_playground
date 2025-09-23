"use client";

import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";

export default function UpdatedUserPage() {
  const user = useRecoilValue(userState);
  return (
    <div>
      <h1>Updated User Page</h1>
      <div>Updated User Nmae : {user.name} </div>
      <div>Updated User Email : {user.email}</div>
    </div>
  );
}
