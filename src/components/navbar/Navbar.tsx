"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export const Navbar = ({ isauth }) => {
  const { status } = useSession();

  const router = useRouter();
  const handleSignIn = () => {
    router.push("/auth/signin"); // Navigate to /auth/signin
  };
  return (
    <div className=" border-b flex items-center justify-center border-[rgb(229, 231, 235)] h-[65px]">
      <div className=" h-100% flex flex-row justify-between items-center  w-[80%]">
        {" "}
        <Image
          src="/image.png"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        {status === "loading" ? (
          <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={() => router.push("/auth/signin")}
          >
            Loading...
          </button>
        ) : isauth ? (
          <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={() => router.push("/auth/signin")}
          >
            Dashboard
          </button>
        ) : (
          <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={() => router.push("/auth/signin")}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};
