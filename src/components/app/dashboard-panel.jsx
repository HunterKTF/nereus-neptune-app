'use client'

import { useState } from 'react';

// TODO: DUMMY DATA HERE
import { data } from "@/lib/dummyData";


import DateRangePicker from "@/components/forms/dateRange";
import {Button} from "@/components/ui/button";
import ClientSelector from "@/components/app/client-selector";

import Overview from "@/components/app/overview";
import Analytics from "@/components/app/analytics";
import Reports from "@/components/app/reports";
import Insights from "@/components/app/insights";

export default function DashboardPanel() {
  const [active, setActive] = useState("overview");
  
  return (
    <div className={"h-full p-8"}>
      <div className={"flex justify-between h-auto"}>
        <h3 className={"text-3xl py-3"}>Dashboard</h3>
        <div className={"flex gap-3"}>
          <DateRangePicker/>
          <Button variant={"text"} className={"bg-black text-white hover:bg-neutral-600"}>
            Generate
          </Button>
        </div>
      </div>
      <div className={"flex justify-between h-auto"}>
        <div className={"flex w-fit gap-2 py-2"}>
          {active === "overview" ? (
            <Button variant={"text"} className={"bg-black text-white"}
                    onClick={() => setActive("overview")}>
              Overview
            </Button>
          ) : (
            <Button variant={"text"} className={"hover:bg-foreground"}
                    onClick={() => setActive("overview")}>
              Overview
            </Button>
          )}
          {active === "analytics" ? (
            <Button variant={"text"} className={"bg-black text-white"}
                    onClick={() => setActive("analytics")}>
              Analytics
            </Button>
          ) : (
            <Button variant={"text"} className={"hover:bg-foreground"}
                    onClick={() => setActive("analytics")}>
              Analytics
            </Button>
          )}
          {active === "reports" ? (
            <Button variant={"text"} className={"bg-black text-white"}
                    onClick={() => setActive("reports")}>
              Reports
            </Button>
          ) : (
            <Button variant={"text"} className={"hover:bg-foreground"}
                    onClick={() => setActive("reports")}>
              Reports
            </Button>
          )}
          {active === "insights" ? (
            <Button variant={"text"} className={"bg-black text-white"}
                    onClick={() => setActive("insights")}>
              Insights
            </Button>
          ) : (
            <Button variant={"text"} className={"hover:bg-foreground"}
                    onClick={() => setActive("insights")}>
              Insights
            </Button>
          )}
        </div>
        <ClientSelector data={data} />
      </div>
      <div className={"pt-4 h-[85%]"}>
        {active === "overview" && <Overview />}
        {active === "analytics" && <Analytics />}
        {active === "reports" && <Reports />}
        {active === "insights" && <Insights />}
      </div>
    </div>
  )
}