'use client'

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  desktop: {
    label: "Value",
    color: "#2563eb",
  },
}

export default function OverviewChart ({data}) {
  const [chartsData, setChartsData] = useState([]);
  
  // Transform data into an indexable dictionary
  let dict = {};
  for (let element in data) {
    dict[data[element]._id] = [
      {month: "Ene", value: data[element].ene}, {month: "Feb", value: data[element].feb},
      {month: "Mar", value: data[element].mar}, {month: "Abr", value: data[element].abr},
      {month: "May", value: data[element].may}, {month: "Jun", value: data[element].jun},
      {month: "Jul", value: data[element].jul}, {month: "Ago", value: data[element].ago},
      {month: "Sep", value: data[element].sep}, {month: "Oct", value: data[element].oct},
      {month: "Nov", value: data[element].nov}, {month: "Dic", value: data[element].dic}
    ];
  }
  
  const valueChange = (value) => {
    setChartsData(dict[value]);
  }
  
  return (
    <div className={"rounded-xl"}>
      <div className={"p-4 flex justify-between"}>
        <h3 className={"text-lg"}>Overview</h3>
        <div className={"w-[200px]"}>
          <Select onValueChange={valueChange}>
            <SelectTrigger className={"w-full"}>
              <SelectValue placeholder={"Select a KPI"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>KPIs</SelectLabel>
                {
                  data.map((name) => {
                    return <SelectItem key={name._id} value={name._id}>{name.name}</SelectItem>
                  })
                }
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="py-2 pr-5 w-full min-h-[472px] max-h-[512px]">
        <BarChart accessibilityLayer data={chartsData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(-3, 3)}
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