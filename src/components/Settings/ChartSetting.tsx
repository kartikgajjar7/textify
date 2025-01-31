"use client";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ChartSetting() {
  const [macd, setMacd] = useState(true);
  const [rsi, setRsi] = useState(true);
  const [bollingerBands, setBollingerBands] = useState(false);
  return (
    <div>
      <Card className="h-full border-none shadow-none">
        <CardHeader>
          <CardTitle>Chart & Visualization Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Default Chart Type</Label>
            <Select defaultValue="candlestick">
              <SelectTrigger>
                <SelectValue placeholder="Select chart type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="line">Line</SelectItem>
                <SelectItem value="candlestick">Candlestick</SelectItem>
                <SelectItem value="bar">Bar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <Label>Technical Indicators</Label>
            <div className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="macd" className="flex flex-col space-y-1">
                  <span>MACD</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Moving Average Convergence Divergence
                  </span>
                </Label>
                <Switch id="macd" checked={macd} onCheckedChange={setMacd} />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="rsi" className="flex flex-col space-y-1">
                  <span>RSI</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Relative Strength Index
                  </span>
                </Label>
                <Switch id="rsi" checked={rsi} onCheckedChange={setRsi} />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="bollinger" className="flex flex-col space-y-1">
                  <span>Bollinger Bands</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Volatility indicator
                  </span>
                </Label>
                <Switch
                  id="bollinger"
                  checked={bollingerBands}
                  onCheckedChange={setBollingerBands}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Scale Type</Label>
            <Select defaultValue="linear">
              <SelectTrigger>
                <SelectValue placeholder="Select scale type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="linear">Linear</SelectItem>
                <SelectItem value="log">Logarithmic</SelectItem>
                <SelectItem value="percentage">Percentage</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
