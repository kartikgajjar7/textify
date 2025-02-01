import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart } from "lucide-react";

export default function PortfolioPerformance() {
  return (
    <Card className="lg:col-span-3 shadow-xl bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">
          Portfolio Performance
        </CardTitle>
        <Select defaultValue="1w">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1d">1 Day</SelectItem>
            <SelectItem value="1w">1 Week</SelectItem>
            <SelectItem value="1m">1 Month</SelectItem>
            <SelectItem value="1y">1 Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
          <BarChart className="w-12 h-12 text-primary" />
          <span className="ml-2 text-muted-foreground">
            Interactive stock performance chart coming soon
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
