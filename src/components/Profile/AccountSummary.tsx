import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, User, Briefcase } from "lucide-react";

export default function AccountSummary() {
  return (
    <Card className="shadow-xl bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Account Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary/10 rounded-full">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <span className="font-medium">Plan</span>
          </div>
          <span className="text-sm bg-primary text-primary-foreground py-1 px-3 rounded-full font-medium">
            Pro
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary/10 rounded-full">
              <User className="w-5 h-5 text-primary" />
            </div>
            <span className="font-medium">Member Since</span>
          </div>
          <span className="text-sm">Jan 15, 2023</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary/10 rounded-full">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <span className="font-medium">Portfolio Value</span>
          </div>
          <span className="text-lg font-bold text-green-600 dark:text-green-400">
            $125,430.00
          </span>
        </div>
        <div className="pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Portfolio Growth</span>
            <span className="text-sm font-bold text-green-600 dark:text-green-400">
              +12.5%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
