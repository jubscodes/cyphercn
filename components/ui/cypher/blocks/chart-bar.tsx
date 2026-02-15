"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/cypher/chart";

import "@/components/ui/cypher/styles/cyberpunk.css";

export const description = "A multiple bar chart";

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

export default function ChartBarMultiple() {
  return (
    <ChartContainer config={chartConfig} className="cyphercn-normal">
      <BarChart data={chartData}>
        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
          stroke="hsl(var(--foreground) / 0.15)"
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
          tick={{ fill: "hsl(var(--foreground) / 0.7)", fontSize: 11 }}
          stroke="hsl(var(--foreground) / 0.3)"
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Bar dataKey="desktop" fill="hsl(var(--foreground) / 0.6)" />
        <Bar dataKey="mobile" fill="hsl(var(--foreground) / 0.3)" />
      </BarChart>
    </ChartContainer>
  );
}
