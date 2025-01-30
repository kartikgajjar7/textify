"use client";
import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const stockData = [
  { date: "2024-01-01", AAPL: 177, TSLA: 250 },
  { date: "2024-01-02", AAPL: 180, TSLA: 245 },
  { date: "2024-01-03", AAPL: 175, TSLA: 260 },
  { date: "2024-01-04", AAPL: 185, TSLA: 270 },
  { date: "2024-01-05", AAPL: 190, TSLA: 275 },
  { date: "2024-01-06", AAPL: 192, TSLA: 280 },
  { date: "2024-01-07", AAPL: 188, TSLA: 278 },
  { date: "2024-01-08", AAPL: 195, TSLA: 285 },
  { date: "2024-01-09", AAPL: 200, TSLA: 290 },
  { date: "2024-01-10", AAPL: 198, TSLA: 295 },
  { date: "2024-01-11", AAPL: 202, TSLA: 300 },
  { date: "2024-01-12", AAPL: 205, TSLA: 310 },
  { date: "2024-01-13", AAPL: 208, TSLA: 315 },
  { date: "2024-01-14", AAPL: 210, TSLA: 320 },
  { date: "2024-01-15", AAPL: 215, TSLA: 325 },
  { date: "2024-01-16", AAPL: 218, TSLA: 330 },
  { date: "2024-01-17", AAPL: 220, TSLA: 335 },
  { date: "2024-01-18", AAPL: 225, TSLA: 340 },
  { date: "2024-01-19", AAPL: 230, TSLA: 345 },
  { date: "2024-01-20", AAPL: 235, TSLA: 350 },
];
const chartConfig = {
  AAPL: {
    label: "Apple (AAPL)",
    color: "hsl(var(--chart-1))",
  },
  TSLA: {
    label: "Tesla (TSLA)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Analytics() {
  const [activeStock, setActiveStock] =
    React.useState<keyof typeof chartConfig>("AAPL");

  return (
    <Card className="border-none">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Stock Market Chart</CardTitle>
          <CardDescription>
            Displaying stock prices for the last few days
          </CardDescription>
        </div>
        <div className="flex">
          {["AAPL", "TSLA"].map((key) => {
            const stock = key as keyof typeof chartConfig;
            return (
              <button
                key={stock}
                data-active={activeStock === stock}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveStock(stock)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[stock].label}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart data={stockData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis domain={["auto", "auto"]} tickMargin={8} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="Stock Price"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeStock}
              type="monotone"
              stroke={`var(--color-${activeStock})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
