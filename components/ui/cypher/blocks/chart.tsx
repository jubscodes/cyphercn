"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/cypher/chart";

import "@/components/ui/cypher/styles/cyberpunk.css";

export const description = "An area chart with axes";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--foreground))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--foreground) / 0.5)",
  },
} satisfies ChartConfig;

export function ChartExample() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full cyphercn-normal"
    >
      <AreaChart accessibilityLayer data={chartData}>
        <CartesianGrid
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
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <YAxis
          width={47}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickCount={3}
          tick={{ fill: "hsl(var(--foreground) / 0.7)", fontSize: 11 }}
          stroke="hsl(var(--foreground) / 0.3)"
        />
        <Area
          dataKey="mobile"
          fill="hsl(var(--foreground) / 0.1)"
          stroke="hsl(var(--foreground) / 0.5)"
          stackId="a"
        />
        <Area
          dataKey="desktop"
          fill="hsl(var(--foreground) / 0.2)"
          stroke="hsl(var(--foreground))"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}
