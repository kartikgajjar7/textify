"use client";
import ChartSetting from "@/components/Settings/ChartSetting";
import GenralSettings from "@/components/Settings/GenralSettings";
import Notification from "@/components/Settings/Notification";
import PortfolioSetiing from "@/components/Settings/PortfolioSetiing";
import MarketDataSettings from "@/components/Settings/MarketDataSettings";
import Api from "@/components/Settings/Api";
export default function page() {
  return (
    <div className="flex flex-col px-4 md:px-8">
      {/* General, Chart, and Notification Settings */}
      <div className="flex flex-col md:flex-row gap-4 justify-start items-stretch">
        <div className="w-full md:w-1/2">
          <GenralSettings />
        </div>
        <div className="w-full md:w-1/4">
          <ChartSetting />
        </div>
        <div className="w-full md:w-1/4">
          <Notification />
        </div>
      </div>

      {/* Portfolio and Market Data Settings */}
      <div className="flex flex-col md:flex-row gap-4 justify-start items-stretch ">
        <div className="w-full md:w-1/2">
          <PortfolioSetiing />
        </div>
        <div className="w-full md:w-1/2">
          <MarketDataSettings />
        </div>
      </div>
    </div>
  );
}
