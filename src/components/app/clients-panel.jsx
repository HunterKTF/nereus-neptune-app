'use client'

import { useState } from 'react';

import { Button } from "@/components/ui/button";
import {columns} from "@/app/clients/columns";
import DataTable from "@/components/app/clients-table";
import AddClient from "@/components/forms/addClient";

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
    "client": "Christine Max",
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
          {active === "table" ? <AddClient /> : <h1>List</h1>}
        </div>
      </div>
      <div className="w-full pt-2">
        {active === "table" && <DataTable columns={columns} data={data}/>}
        {active === "upload" && <h1>Upload File here</h1>}
        {active === "edit" && <h1>Edit client data</h1>}
      </div>
    </div>
  )
}