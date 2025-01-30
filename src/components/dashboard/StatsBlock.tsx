import { User2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsBlockProps {
  title: string;
  value: number;
  change: {
    value: number;
    timeframe: string;
  };
  className?: string;
}

export default function StatsBlock({
  title,
  value,
  change,
  className,
}: StatsBlockProps) {
  const isPositive = change.value >= 0;

  return (
    <div
      className={cn(
        "rounded-xl bg-card p-6",
        "shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.4)]",
        "backdrop-blur-[2px] dark:backdrop-blur-[5px]",
        "border border-border/50 lg:w-1/4",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]",
        "hover:scale-[1.02]",

        className
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <User2 className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="mt-2">
        <p className="text-2xl font-bold">+{value.toLocaleString()}</p>
        <p
          className={cn(
            "mt-1 text-sm",
            isPositive
              ? "text-emerald-500 dark:text-emerald-400"
              : "text-red-500 dark:text-red-400"
          )}
        >
          {isPositive ? "+" : "-"}
          {Math.abs(change.value)}% {change.timeframe}
        </p>
      </div>
    </div>
  );
}
