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
export default function Notification() {
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [volumeAlerts, setVolumeAlerts] = useState(true);
  const [newsAlerts, setNewsAlerts] = useState(true);
  const [earningsAlerts, setEarningsAlerts] = useState(true);
  return (
    <div>
      {" "}
      <Card className="h-full border-none shadow-none">
        <CardHeader>
          <CardTitle>Notification & Alerts Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="price-alerts" className="flex flex-col space-y-1">
              <span>Price Alerts</span>
              <span className="font-normal text-sm text-muted-foreground">
                Get notified of price movements
              </span>
            </Label>
            <Switch
              id="price-alerts"
              checked={priceAlerts}
              onCheckedChange={setPriceAlerts}
            />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="volume-alerts" className="flex flex-col space-y-1">
              <span>Volume Alerts</span>
              <span className="font-normal text-sm text-muted-foreground">
                Track unusual trading volumes
              </span>
            </Label>
            <Switch
              id="volume-alerts"
              checked={volumeAlerts}
              onCheckedChange={setVolumeAlerts}
            />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="news-alerts" className="flex flex-col space-y-1">
              <span>News Alerts</span>
              <span className="font-normal text-sm text-muted-foreground">
                Stay updated with market news
              </span>
            </Label>
            <Switch
              id="news-alerts"
              checked={newsAlerts}
              onCheckedChange={setNewsAlerts}
            />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label
              htmlFor="earnings-alerts"
              className="flex flex-col space-y-1"
            >
              <span>Earnings & Dividends Alerts</span>
              <span className="font-normal text-sm text-muted-foreground">
                Track corporate events
              </span>
            </Label>
            <Switch
              id="earnings-alerts"
              checked={earningsAlerts}
              onCheckedChange={setEarningsAlerts}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
