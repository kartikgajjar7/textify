"use client";
import Rows from "./Rows";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useIsMobile } from "@/hooks/use-mobile";
import { Weight } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { useRouter } from "next/navigation";
export default function Hero() {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-4/5 lg:h-full max-w-9xl">
      <div className="relative flex flex-col w-full h-full">
        {isMobile ? (
          <>
            <Rows number_off_white={Number("5")} />
            <Rows number_off_white={Number("6")} />
            <Rows number_off_white={Number("7")} />
            <Rows number_off_white={Number("7")} />
            <Rows number_off_white={Number("7")} />
            <Rows number_off_white={Number("6")} />
            <Rows number_off_white={Number("5")} />
          </>
        ) : (
          <>
            <Rows number_off_white={Number("3")} />
            <Rows number_off_white={Number("5")} />
            <Rows number_off_white={Number("6")} />
            <Rows number_off_white={Number("6")} />
            <Rows number_off_white={Number("5")} />
            <Rows number_off_white={Number("4")} />
            <Rows number_off_white={Number("3")} />
          </>
        )}
      </div>
      <div className="z-[999] flex w-[80%] text-center flex-col top-[80px] items-center lg:top-[200px] absolute lg:w-[40%] lg:h-[50%]">
        <h1 className=" text-2xl  lg:text-5xl  text-center font-semibold font-apercu">
          Unlock the Power of Data-Driven Investing with
          <span className="relative">
            <Cover>✨Quark</Cover>
          </span>
        </h1>
        {!isMobile ? (
          <h1 className="font-apercu mt-4 text-sm lg:text-2xl lg:leading-6">
            From tracking to trading—Quark simplifies stock market analysis.
          </h1>
        ) : null}

        {!isMobile ? (
          <h1 className="font-apercu text-2xl">
            Analyze, strategize, and invest with ease.
          </h1>
        ) : null}

        <div className="mt-7">
          {!isMobile ? (
            <HoverBorderGradient
              containerClassName="rounded-full"
              onClick={() => {
                console.log("hey");
                router.push("/dashboard");
              }}
              as="button"
              className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
            >
              <h1 className="text-xl">Dive Into Quark</h1>
            </HoverBorderGradient>
          ) : null}
        </div>
      </div>
    </div>
  );
}
