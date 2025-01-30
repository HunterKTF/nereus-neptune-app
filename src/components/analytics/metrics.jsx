'use client'

import { useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MetricsTable({tableData}) {
  const [data, setData] = useState({});
  
  // Transform data into an indexable dictionary
  let dict = {};
  for (let element in tableData) {
    dict[tableData[element]._id] = tableData[element];
  }
  
  const valueChange = (value) => {
    setData(dict[value]);
  }
  
  return (
    <div className={"p-4"}>
      <div className={""}>
        <h3 className={"text-lg"}>Metricas Anuales</h3>
        <Select onValueChange={valueChange}>
          <SelectTrigger className={"w-full"}>
            <SelectValue placeholder={"Select a Metric"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>KPIs</SelectLabel>
              {
                tableData.map((name) => {
                  return <SelectItem key={name._id} value={name._id}>{name.name}</SelectItem>
                })
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="h-[500px] w-full rounded-md border mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Mes</TableHead>
              <TableHead className="text-right">Cantidad</TableHead>
            </TableRow>
          </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">ENERO</TableCell>
                <TableCell className="text-right">${data?.ene}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">FEBRERO</TableCell>
                <TableCell className="text-right">${data?.feb}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MARZO</TableCell>
                <TableCell className="text-right">${data?.mar}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ABRIL</TableCell>
                <TableCell className="text-right">${data?.abr}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MAYO</TableCell>
                <TableCell className="text-right">${data?.may}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">JUNIO</TableCell>
                <TableCell className="text-right">${data?.jun}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">JULIO</TableCell>
                <TableCell className="text-right">${data?.jul}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">AGOSTO</TableCell>
                <TableCell className="text-right">${data?.ago}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SEPTIEMBRE</TableCell>
                <TableCell className="text-right">${data?.sep}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">OCTUBRE</TableCell>
                <TableCell className="text-right">${data?.oct}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">NOVIEMBRE</TableCell>
                <TableCell className="text-right">${data?.nov}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">DICIEMBRE</TableCell>
                <TableCell className="text-right">${data?.dic}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SUMA</TableCell>
                <TableCell className="text-right">${data?.sum}</TableCell>
              </TableRow>
            </TableBody>
        </Table>
      </ScrollArea>
    </div>
  )
}