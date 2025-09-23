import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Tutorial",
  description: "튜토리얼 페이지",
};

export default function Home() {
  return (
    <main>
      Home
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
