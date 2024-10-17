'use client'

import Link from 'next/link';

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";

import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className={"w-full"}>
      <div className={"flex px-5 py-3 justify-between items-center"}>
        <div className={"flex gap-8"}>
          <Link href="/dashboard">
            Dashboard
          </Link>
          <Link href="/clients">
            Clients
          </Link>
          <Link href="/settings">
            Settings
          </Link>
        </div>
        <div className={"flex gap-2 items-center"}>
          <Avatar className={""}>
            <AvatarFallback className={"bg-foreground w-9 h-9"}>CN</AvatarFallback>
          </Avatar>
          <Link href={"/auth"}>
            <Button variant="text" size="sm" className={"felx gap-2"}>
              Logout <RiLogoutCircleRLine size={"20px"}/>
            </Button>
          </Link>
        </div>
      </div>
      <Separator/>
    </div>
  )
}