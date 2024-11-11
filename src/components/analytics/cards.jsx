'use client'

import KpiSelector from "@/components/app/kpi-selector";
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

export default function Cards({data}) {
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("Value");
  const [description, setDescription] = useState("Description");
  
  // Transform data into an indexable dictionary
  let dict = {};
  for (let element in data) {
    dict[data[element]._id] = data[element];
  }
  
  const valueChange = (value) => {
    setSelected(value);
    setValue(dict[value]?.sum);
    setDescription(dict[value]?.year);
  }
  
  return (
    <div className={"w-full h-full p-4 flex flex-col justify-between border border-black rounded-xl gap-3"}>
      <div className={"flex justify-between items-center"}>
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
      <div className={"flex flex-col"}>
        <h4 className={"text-3xl"}>{value}</h4>
        <p className={"text-xs"}>{description}</p>
      </div>
    </div>
  )
}