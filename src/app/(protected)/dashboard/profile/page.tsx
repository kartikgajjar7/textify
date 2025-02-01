"use client";
import AccountSummary from "@/components/Profile/AccountSummary";
import PortfolioPerformance from "@/components/Profile/PortfolioPerformance";
import PersonalInfo from "@/components/Profile/PersonalInfo";
import { useSession } from "next-auth/react";
export default function page() {
  const { data: session, status } = useSession();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full flex gap-4 flex-col justify-start  py-4 items-center md:flex-row">
        <div className="w-full px-8">
          <PersonalInfo
            name={session?.user?.name}
            email={session?.user?.email}
          />
        </div>
        <div className="w-full px-8">
          <AccountSummary />
        </div>
      </div>
      <div className="w-full px-8">
        <PortfolioPerformance />
      </div>
    </div>
  );
}
