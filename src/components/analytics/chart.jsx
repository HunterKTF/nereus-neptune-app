'use client'

// TODO: DUMMY DATA
import { chartData } from "@/lib/dummyChart";
import { KpiSelect } from "@/lib/dummyKpiSelect";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import KpiSelector from "@/components/app/kpi-selector";

const chartConfig = {
  desktop: {
    label: "Value",
    color: "#2563eb",
  },
}

export default function OverviewChart () {
  return (
    <div className={"rounded-xl"}>
      <div className={"p-4 flex justify-between"}>
        <h3 className={"text-lg"}>Overview</h3>
        <div className={"w-[200px]"}>
          <KpiSelector data={KpiSelect} />
        </div>
      </div>
      <ChartContainer config={chartConfig} className="py-2 pr-5 w-full min-h-[472px] max-h-[512px]">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--color-desktop)" radius={9} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}