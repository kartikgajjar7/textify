"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function MarketDataSettings() {
  const [refreshInterval, setRefreshInterval] = useState(1);
  const [dividendEarnings, setDividendEarnings] = useState(true);
  const [prePostMarket, setPrePostMarket] = useState(true);
  return (
    <Card className="h-full  border-none shadow-none">
      <CardHeader>
        <CardTitle>Market Data Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Data Refresh Interval (minutes)</Label>
          <Slider
            value={[refreshInterval]}
            onValueChange={([value]) => setRefreshInterval(value)}
            max={10}
            min={1}
            step={1}
          />
          <span className="text-sm text-muted-foreground">
            Current: {refreshInterval}{" "}
            {refreshInterval === 1 ? "minute" : "minutes"}
          </span>
        </div>

        <div className="space-y-2">
          <Label>Historical Data Range</Label>
          <Select defaultValue="3m">
            <SelectTrigger>
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">1 Month</SelectItem>
              <SelectItem value="3m">3 Months</SelectItem>
              <SelectItem value="1y">1 Year</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="pre-post-market" className="flex flex-col space-y-1">
            <span>Pre/Post Market Data</span>
            <span className="font-normal text-sm text-muted-foreground">
              Show extended hours trading data
            </span>
          </Label>
          <Switch
            id="pre-post-market"
            checked={prePostMarket}
            onCheckedChange={setPrePostMarket}
          />
        </div>

        <div className="flex items-center justify-between space-x-2">
          <Label
            htmlFor="dividend-earnings"
            className="flex flex-col space-y-1"
          >
            <span>Show Dividend & Earnings</span>
            <span className="font-normal text-sm text-muted-foreground">
              Display upcoming events
            </span>
          </Label>
          <Switch
            id="dividend-earnings"
            checked={dividendEarnings}
            onCheckedChange={setDividendEarnings}
          />
        </div>
      </CardContent>
    </Card>
  );
}
