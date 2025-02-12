import HomePage from "@/components/layout/Home/HomePage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-5/6 mx-auto">
      <div className="flex flex-row justify-between">
        Welcome to our app
        <Link href={"/auth"} className="m-1 p-2 ">
          Sign In with Google
        </Link>
      </div>
      <HomePage />
    </div>
  );
}
