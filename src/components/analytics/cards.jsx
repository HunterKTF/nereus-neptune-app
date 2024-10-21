'use client'

import KpiSelector from "@/components/app/kpi-selector";
import { KpiSelect } from "@/lib/dummyKpiSelect";

import { FaCaretDown } from "react-icons/fa";

export default function Cards({data}) {
  return (
    <div className={"w-full h-full p-4 flex flex-col justify-between border border-black rounded-xl"}>
      <div className={"flex justify-between items-center"}>
        <KpiSelector data={KpiSelect} />
      </div>
      <div className={"flex flex-col"}>
        <h4 className={"text-3xl"}>{data.value}</h4>
        <p className={"text-xs"}>{data.description}</p>
      </div>
    </div>
  )
}