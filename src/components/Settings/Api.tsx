"use client";
import React from "react";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function Api() {
  const [webSocket, setWebSocket] = useState(true);
  return (
    <div>
      {" "}
      <Card className="h-full border-none shadow-none">
        <CardHeader>
          <CardTitle>Data Source & API Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Data Provider</Label>
            <Select defaultValue="yahoo">
              <SelectTrigger>
                <SelectValue placeholder="Select provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yahoo">Yahoo Finance</SelectItem>
                <SelectItem value="alpha">Alpha Vantage</SelectItem>
                <SelectItem value="iex">IEX Cloud</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>API Key</Label>
            <div className="flex items-center space-x-2">
              <input
                type="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value="••••••••••••••••"
                readOnly
              />
            </div>
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="websocket" className="flex flex-col space-y-1">
              <span>Use WebSocket (Real-time)</span>
              <span className="font-normal text-sm text-muted-foreground">
                Enable live data updates
              </span>
            </Label>
            <Switch
              id="websocket"
              checked={webSocket}
              onCheckedChange={setWebSocket}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
