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
export default function PortfolioSetiing() {
  const [transactionFees, setTransactionFees] = useState(true);

  return (
    <div className="h-full">
      <Card className="h-full border-none shadow-none">
        <CardHeader>
          <CardTitle>Portfolio & Trading Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Currency Preference</Label>
            <Select defaultValue="USD">
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="INR">INR</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label
              htmlFor="transaction-fees"
              className="flex flex-col space-y-1"
            >
              <span>Include Transaction Fees</span>
              <span className="font-normal text-sm text-muted-foreground">
                Calculate P&L with fees
              </span>
            </Label>
            <Switch
              id="transaction-fees"
              checked={transactionFees}
              onCheckedChange={setTransactionFees}
            />
          </div>

          <div className="space-y-2">
            <Label>P&L Display Format</Label>
            <Select defaultValue="both">
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="absolute">Absolute</SelectItem>
                <SelectItem value="percentage">Percentage</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
