'use client'

import { useState, startTransition } from 'react';
import { useFormStatus } from 'react-dom';
import { downloadData } from "@/actions/dashboard/actions";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import { useToast } from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import DateRangePicker from "@/components/forms/dateRange";

import Overview from "@/components/app/overview";
import Analytics from "@/components/app/analytics";
import Reports from "@/components/app/reports";
import Insights from "@/components/app/insights";

const formSchema = z.object({
  clientId: z.string(),
});

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type={"submit"} disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  )
}

function FormStructure({action, data}) {
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(action)} className={"w-fit flex justify-around items-center gap-3"}>
        {/*<DateRangePicker />*/}
        <FormField
          control={form.control}
          name="clientId"
          render={({field}) => (
            <FormItem className={"w-[240px]"}>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={"w-[240px]"}>
                    <SelectValue placeholder={"Select a client"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Clients</SelectLabel>
                    {
                      data.map((name) => {
                        return <SelectItem key={name.id_number} value={name.client_id} >{name.company}</SelectItem>
                      })
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type={"submit"}
                className={"flex"}>
          Generate
        </Button>
      </form>
    </Form>
  )
}

export default function DashboardPanel({data}) {
  // Define active state for menu
  const [active, setActive] = useState("overview");
  
  // Define success and error states
  const [metrics, setMetrics] = useState([]);
  const [kpis, setKpis] = useState([]);

  const { toast } = useToast();

  const onSubmit = (values) => {

    let formData = new FormData();
    formData.append('clientId', values.clientId);

    startTransition(() => {
      downloadData(formData).then((result) => {
        if (result.data !== []) {
          toast({
            variant: "success",
            title: result.message
          });
        } else {
          toast({
            variant: "destructive",
            title: result.message,
          });
        }
      });
    });
  };
  
  return (
    <div className={"h-full p-8 flex flex-col"}>
      <div className={"flex justify-between"}>
        <h3 className={"text-3xl py-3"}>Dashboard</h3>
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
        <div className={"flex gap-3"}>
          {/*<DashboardRange tableData={data} />*/}
          <FormStructure action={onSubmit} data={data} />
        </div>
      </div>
      <div className={"pt-4"}>
        {active === "overview" && <Overview metrics={metrics} kpis={kpis} />}
        {active === "analytics" && <Analytics/>}
        {active === "reports" && <Reports/>}
        {active === "insights" && <Insights />}
      </div>
    </div>
  )
}