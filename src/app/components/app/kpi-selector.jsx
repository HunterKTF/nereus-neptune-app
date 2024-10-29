'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

export default function KpiSelector({data}) {
  return (
    <Select>
      <SelectTrigger className={"w-full"}>
        <SelectValue placeholder={"Select a KPI"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>KPIs</SelectLabel>
          {
            data.map((name) => {
              return <SelectItem key={name.id} value={name.name}>{name.name}</SelectItem>
            })
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}