'use client'

import Cards from "@/components/analytics/cards";
import MetricsTable from "@/components/analytics/metrics";
import OverviewChart from "@/components/analytics/chart";

import { dummyKPIs } from "@/lib/dummyKPIs";

export default function Overview () {
  return (
    <div className={"h-full flex flex-col items-center"}>
      <div className={"flex h-[28%] w-full"}>
        <div className="w-full grid grid-cols-4 gap-4">
          {
            dummyKPIs.map((data) => {
              return <Cards key={data.id} data={data} />
            })
          }
        </div>
      </div>
      <div className={"h-full w-full mt-4"}>
        <div className="w-full grid grid-cols-7 gap-4">
          <div className="col-span-4 border border-black rounded-xl">
            <OverviewChart/>
          </div>
          <div className="col-span-3 border border-black rounded-xl">
            <MetricsTable/>
          </div>
        </div>
      </div>
    </div>
  )
}