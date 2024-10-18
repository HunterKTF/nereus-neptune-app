'use client'

import { useState } from 'react';

import { Button } from "@/components/ui/button";
import {columns} from "@/app/clients/columns";
import DataTable from "@/components/app/clients-table";

import { FaPlus } from "react-icons/fa6";

// Clients main views here


// DUMMY DATA
const data = [
  {
    "id_number": "UUID-1287",
    "client": "John Doe",
    "company": "Anywhere Co",
    "date_added": "1-12-2024",
    "status": "active"
  },
  {
    "id_number": "UUID-1287",
    "client": "John Doe",
    "company": "Anywhere Co",
    "date_added": "1-12-2024",
    "status": "active"
  },
  {
    "id_number": "UUID-1287",
    "client": "John Doe",
    "company": "Anywhere Co",
    "date_added": "1-12-2024",
    "status": "active"
  },
]

export default function ClientsPanel() {
  const [active, setActive] = useState("table");
  
  return (
    <div className={"p-8"}>
      <div className={""}>
        <h3 className={"text-3xl py-3"}>Clients</h3>
      </div>
      <div className={"flex justify-between"}>
        <div className={"flex w-fit gap-2 py-2"}>
          <Button variant={"filled"} className={"hover:bg-foreground"}
                  onClick={() => setActive("profile")}>
            Table View
          </Button>
          <Button variant={"text"} className={"hover:bg-foreground"}
                  onClick={() => setActive("account")}>
            Upload File
          </Button>
          <Button variant={"text"} className={"hover:bg-foreground"}
                  onClick={() => setActive("notifications")}>
            Edit Client
          </Button>
        </div>
        <div className={"flex w-fit gap-2 py-2"}>
          <Button variant={"text"} className={"bg-white text-black hover:bg-neutral-400"}
                  onClick={() => setActive("notifications")}>
            Add client <FaPlus />
          </Button>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data}/>
      </div>
    </div>
  )
}