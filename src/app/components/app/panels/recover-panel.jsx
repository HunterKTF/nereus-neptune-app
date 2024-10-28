'use client'

import Link from "next/link";
import ResetForm from "@/app/components/forms/resetPassword";

export default function RecoverPanel() {
  return (
    <div className={"w-full h-full flex flex-col justify-between p-11"}>
      <div className={"w-full flex justify-end gap-4"}>
        <Link href={"/auth"} className={"text-sm border border-white rounded-md px-3 py-1"}>
          Go back
        </Link>
      </div>
      <ResetForm />
      <div className={"w-full flex justify-end"}>
        <p className={"text-sm"}>
          Nereus AI Copyright © 2024
        </p>
      </div>
    </div>
  )
}