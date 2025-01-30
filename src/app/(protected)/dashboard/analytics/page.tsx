import Analytics from "@/components/analytics/Analytics";
import TopGainersStocks from "@/components/analytics/Topgainer";
import FinanceChart from "@/components/dashboard/FinanceChart";
export default function page() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start gap-4">
      <div
        className="flex
        flex-col              // Default for mobile: column layout
        lg:flex-row          // Changes to row on lg screens
        h-fit
        items-stretch
      
        w-full"
      >
        <div className="w-full lg:w-1/2">
          <Analytics />
        </div>
        <div className="w-full lg:w-1/2">
          <TopGainersStocks />
        </div>
      </div>
      <div className="w-full">
        <FinanceChart />
      </div>
    </div>
  );
}
