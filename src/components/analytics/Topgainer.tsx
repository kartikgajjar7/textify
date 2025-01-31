// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const topGainers = [
//   {
//     symbol: "AAPL",
//     name: "Apple Inc.",
//     price: 150.25,
//     change: 5.75,
//     percentChange: 3.98,
//   },
//   {
//     symbol: "GOOGL",
//     name: "Alphabet Inc.",
//     price: 2750.8,
//     change: 45.3,
//     percentChange: 1.67,
//   },

//   {
//     symbol: "MSFT",
//     name: "Microsoft Corporation",
//     price: 305.15,
//     change: 8.2,
//     percentChange: 2.76,
//   },
//   {
//     symbol: "AMZN",
//     name: "Amazon.com Inc.",
//     price: 3380.5,
//     change: 62.75,
//     percentChange: 1.89,
//   },
//   {
//     symbol: "TSLA",
//     name: "Tesla Inc.",
//     price: 725.6,
//     change: 28.4,
//     percentChange: 4.07,
//   },
// ];

// export default function TopGainersStocks() {
//   return (
//     <Card className="w-full h-full border-none  ">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold">Top Gainers Stocks</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <Table>
//           <TableCaption>Top performing stocks of the day</TableCaption>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Symbol</TableHead>
//               <TableHead>Name</TableHead>
//               <TableHead className="text-right">Price</TableHead>
//               <TableHead className="text-right">Change</TableHead>
//               <TableHead className="text-right">% Change</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {topGainers.map((stock) => (
//               <TableRow key={stock.symbol}>
//                 <TableCell className="font-medium">{stock.symbol}</TableCell>
//                 <TableCell>{stock.name}</TableCell>
//                 <TableCell className="text-right">
//                   ${stock.price.toFixed(2)}
//                 </TableCell>
//                 <TableCell className="text-right text-green-600">
//                   +${stock.change.toFixed(2)}
//                 </TableCell>
//                 <TableCell className="text-right text-green-600">
//                   +{stock.percentChange.toFixed(2)}%
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//   );
// }
"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const topGainers = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 150.25,
    change: 5.75,
    percentChange: 3.98,
  },
  {
    symbol: "TATA",
    name: "TATA Inc.",
    price: 120.25,
    change: 5.75,
    percentChange: 3.98,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2750.8,
    change: 45.3,
    percentChange: 1.67,
  },
  {
    symbol: "GOOGL Labs",
    name: "Alphabet Inc.",
    price: 2750.8,
    change: 45.3,
    percentChange: 1.67,
  },

  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 305.15,
    change: 8.2,
    percentChange: 2.76,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 3380.5,
    change: 62.75,
    percentChange: 1.89,
  },
  {
    symbol: "Swiggy",
    name: "Siwiggy.com Inc.",
    price: 5380.5,
    change: 22.75,
    percentChange: 1.89,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 725.6,
    change: 28.4,
    percentChange: 4.07,
  },
];

export default function TopGainersStocks() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStocks = useMemo(() => {
    return topGainers.filter(
      (stock) =>
        stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="w-full max-w-4xl px-3 mx-auto space-y-4">
      <div className="flex items-center  space-x-2">
        <Input
          placeholder="Search stocks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
      </div>
      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Symbol</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Change</TableHead>
              <TableHead className="text-right">% Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStocks.map((stock) => (
              <TableRow
                key={stock.symbol}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <TableCell className="font-medium">{stock.symbol}</TableCell>
                <TableCell>{stock.name}</TableCell>
                <TableCell className="text-right">
                  ${stock.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-right text-green-600">
                  +${stock.change.toFixed(2)}
                </TableCell>
                <TableCell className="text-right text-green-600">
                  +{stock.percentChange.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
