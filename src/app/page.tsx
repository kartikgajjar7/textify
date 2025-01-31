import { auth } from "@/auth";
import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/hero/Pricing";
import { json } from "stream/consumers";
import Features from "@/components/hero/Features";

export default async function Home() {
  const session = await auth(); // Fetch session data
  const isAuthenticated = !!session?.user;
  return (
    <main className=" border p-0 h-screen w-screen ">
      <Navbar isauth={isAuthenticated} />
      <div className="w-full relative flex justify-center lg:h-full ">
        <Hero />
      </div>
      <Features />
      <Pricing />
    </main>
  );
}
