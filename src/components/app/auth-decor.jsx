'use client'

import Image from "next/image";

export default function AuthDecorator() {
  return (
    <div className={"w-full"}>
      <div className={"w-full h-full bg-foreground flex flex-col justify-between p-11"}>
        <div className={"w-full flex gap-2 items-end"}>
          <Image src={"img/Logo_44.svg"} width={"44"} height={"44"} alt={"Nereus AI Logo"}/>
          <h4 className={"text-3xl"}>Neptune</h4>
          <span className={"text-lg"}>by NereusAI</span>
        </div>
        <div className={"w-full flex flex-col gap-2"}>
          <p className={"text-lg"}>
            &quot;This app has saved me countless hours of work and helped me deliver stunning designs to my clients
            faster than ever before.&quot;
          </p>
          <p className={"text-sm font-bold"}>
            Sofia Davis
          </p>
        </div>
      </div>
    </div>
  )
}