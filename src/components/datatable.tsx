"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type Stock = {
  symbol: string;
  company: string;
  price: number;
  change: number;
  percentageChange: number;
  volume: number;
  marketCap: number;
};

const data: Stock[] = [
  {
    symbol: "AAPL",
    company: "Apple Inc.",
    price: 180.12,
    change: -1.23,
    percentageChange: -0.68,
    volume: 74200000,
    marketCap: 2800000000000,
  },
  {
    symbol: "TSLA",
    company: "Tesla Inc.",
    price: 265.42,
    change: 3.78,
    percentageChange: 1.45,
    volume: 51200000,
    marketCap: 850000000000,
  },
  {
    symbol: "AMZN",
    company: "Amazon.com Inc.",
    price: 145.22,
    change: -0.98,
    percentageChange: -0.67,
    volume: 62000000,
    marketCap: 1470000000000,
  },
  {
    symbol: "GOOGL",
    company: "Alphabet Inc.",
    price: 2750.33,
    change: 15.21,
    percentageChange: 0.56,
    volume: 34000000,
    marketCap: 1750000000000,
  },
  {
    symbol: "MSFT",
    company: "Microsoft Corp.",
    price: 350.76,
    change: 5.12,
    percentageChange: 1.48,
    volume: 59000000,
    marketCap: 2600000000000,
  },
];

export const columns: ColumnDef<Stock>[] = [
  {
    accessorKey: "symbol",
    header: "Symbol",
    cell: ({ row }) => <b>{row.getValue("symbol")}</b>,
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => <span>{row.getValue("company")}</span>,
  },
  {
    accessorKey: "price",
    header: "Price ($)",
    cell: ({ row }) => row.getValue("price").toFixed(2),
  },
  {
    accessorKey: "change",
    header: "Change ($)",
    cell: ({ row }) => row.getValue("change"),
    sortingFn: "basic",
  },
  {
    accessorKey: "percentageChange",
    header: "Change (%)",
    cell: ({ row }) => `${row.getValue("percentageChange").toFixed(2)}%`,
  },
  {
    accessorKey: "volume",
    header: "Volume",
    cell: ({ row }) => row.getValue("volume").toLocaleString(),
  },
  {
    accessorKey: "marketCap",
    header: "Market Cap ($B)",
    cell: ({ row }) => (row.getValue("marketCap") / 1e9).toFixed(2) + "B",
  },
];

export default function StockTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: { sorting, columnFilters, columnVisibility },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search company..."
          value={(table.getColumn("company")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("company")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
