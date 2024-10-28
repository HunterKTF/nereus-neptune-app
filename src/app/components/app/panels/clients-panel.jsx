'use client'

import { useState } from 'react';

// TODO: DUMMY DATA HERE
import { data } from "@/lib/dummyData";

import { Button } from "@/app/components/ui/button";
import {columns} from "@/app/(protected)/clients/columns";
import DataTable from "@/app/components/app/clients-table";
import AddClient from "@/app/components/forms/addClient";
import ClientSelector from "@/app/components/app/client-selector";
import UploadForm from "@/app/components/forms/upload";
import EditForm from "@/app/components/forms/editClient";

// Clients main views here


export default function ClientsPanel() {
  const [active, setActive] = useState("table");
  
  return (
    <div className={"p-8"}>
      <h3 className={"text-3xl py-3"}>Clients</h3>
      <div className={"flex justify-between"}>
        <div className={"flex w-fit gap-2 py-2"}>
          {active === "table" ? (
            <Button variant={"text"} className={"bg-black text-white"}
                    onClick={() => setActive("table")}>
              Table View
            </Button>
          ) : (
            <Button variant={"text"} className={"hover:bg-foreground"}
                    onClick={() => setActive("table")}>
              Table View
            </Button>
          )}
          {active === "upload" ? (
            <Button variant={"text"} className={"bg-black text-white"}
                    onClick={() => setActive("upload")}>
              Upload File
            </Button>
          ) : (
            <Button variant={"text"} className={"hover:bg-foreground"}
                    onClick={() => setActive("upload")}>
              Upload File
            </Button>
          )}
          {active === "edit" ? (
            <Button variant={"text"} className={"bg-black text-white"}
                    onClick={() => setActive("edit")}>
              Edit Client
            </Button>
          ) : (
            <Button variant={"text"} className={"hover:bg-foreground"}
                    onClick={() => setActive("edit")}>
              Edit Client
            </Button>
          )}
        </div>
        <div className={"flex w-fit gap-2 py-2"}>
          {active === "table" ? <AddClient /> : <ClientSelector data={data} />}
        </div>
      </div>
      <div className="w-full pt-5 ">
        {active === "table" && <DataTable columns={columns} data={data}/>}
        {active === "upload" && <UploadForm />}
        {active === "edit" && <EditForm />}
      </div>
    </div>
  )
}