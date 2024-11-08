'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ClientSelector({ data }) {
  return (
    <Select>
      <SelectTrigger className={"w-[280px]"}>
        <SelectValue placeholder={"Select a client"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Clients</SelectLabel>
          {
            data.map((name) => {
              return <SelectItem key={name.id_number} value={name.company} >{name.company}</SelectItem>
            })
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}