"use client";

import { Activity } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/cypher/chart";

import "@/components/ui/cypher/styles/cyberpunk.css";

export const description = "A step area chart";

const chartData = [
  { month: "January", desktop: 99 },
  { month: "February", desktop: 204 },
  { month: "March", desktop: 180 },
  { month: "April", desktop: 120 },
  { month: "May", desktop: 180 },
  { month: "June", desktop: 42 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--foreground))",
    icon: Activity,
  },
} satisfies ChartConfig;

export default function ChartAreaStep() {
  return (
    <ChartContainer config={chartConfig} className="cyphercn-normal">
      <AreaChart
        data={chartData}
        margin={{
          left: 20,
          right: 20,
        }}
      >
        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
          stroke="hsl(var(--foreground) / 0.15)"
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
          tick={{ fill: "hsl(var(--foreground) / 0.7)", fontSize: 11 }}
          stroke="hsl(var(--foreground) / 0.3)"
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Area
          dataKey="desktop"
          type="step"
          fill="hsl(var(--foreground) / 0.2)"
          stroke="hsl(var(--foreground))"
          activeDot={{
            fill: "hsl(var(--foreground))",
          }}
        />
      </AreaChart>
    </ChartContainer>
  );
}
