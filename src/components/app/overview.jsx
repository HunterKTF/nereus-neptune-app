'use client'

import Cards from "@/components/analytics/cards";
import MetricsTable from "@/components/analytics/metrics";
import OverviewChart from "@/components/analytics/chart";

export default function Overview ({ metrics, kpis }) {
  console.log(metrics);
  console.log(kpis);
  return (
    <div className={"h-full flex flex-col items-center"}>
      <div className={"flex w-full"}>
        <div className="w-full grid grid-cols-4 gap-4">
          <Cards data={metrics} />
          <Cards data={metrics} />
          <Cards data={metrics} />
          <Cards data={metrics} />
        </div>
      </div>
      <div className={"h-full w-full mt-4"}>
        <div className="w-full grid grid-cols-7 gap-4">
          <div className="col-span-4 border border-black rounded-xl">
            <OverviewChart data={kpis} />
          </div>
          <div className="col-span-3 border border-black rounded-xl">
            <MetricsTable tableData={metrics} />
          </div>
        </div>
      </div>
    </div>
  )
}