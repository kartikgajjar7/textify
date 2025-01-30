import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { FileText, Clock } from "lucide-react";
import Announcements from "@/components/dashboard/Announcements";
import Barchart from "@/components/dashboard/Barchart";
import Pichart from "@/components/dashboard/Pichart";
import EventCalendar from "@/components/dashboard/EventCalendar";
import FinanceChart from "@/components/dashboard/FinanceChart";
import UserCard from "@/components/dashboard/UserCard";
import StatsBlock from "@/components/dashboard/StatsBlock";
import DataTableDemo from "@/components/datatable";
import { RecentlyVisitedCard } from "@/components/dashboard/RecentlyVisitedCard";
const recentlyVisited = [
  {
    id: "9",
    title: "jho",
    icon: <FileText className="h-4 w-4" />,
    lastModified: "Just now",
  },
  {
    id: "10",
    title: "New page",
    icon: <FileText className="h-4 w-4" />,
    lastModified: "Just now",
  },
  {
    id: "11",
    title: "Prisma + Nextauth",
    icon: <FileText className="h-4 w-4" />,
    lastModified: "1d ago",
  },
  {
    id: "12",
    title: "hi",
    icon: <FileText className="h-4 w-4" />,
    lastModified: "1d ago",
  },
  {
    id: "13",
    title: "New page",
    icon: <FileText className="h-4 w-4" />,
    lastModified: "Jan 9",
  },
];

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div className="p-4 h-full flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-col lg:flex-row ">
          <StatsBlock
            title="Subscriptions"
            value={2350}
            change={{
              value: 180.1,
              timeframe: "from last month",
            }}
          />
          <StatsBlock
            title="Capitalization"
            value={"$1.5T"}
            change={{
              value: -2.3,
              timeframe: "from last week",
            }}
          />

          <StatsBlock
            title="Daily Trading"
            value={"$120M"}
            change={{
              value: 15.7,
              timeframe: "from yesterday",
            }}
          />

          <StatsBlock
            title="Stock Price"
            value={"$320.50"}
            change={{
              value: 5.2,
              timeframe: "from last closing",
            }}
          />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* pi */}
          <div className=" lg:w-1/2 h-full">
            <Pichart />
          </div>
          {/* bar CHART */}
          <div className="w-full   ">
            <Barchart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <DataTableDemo />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default DashboardPage;
