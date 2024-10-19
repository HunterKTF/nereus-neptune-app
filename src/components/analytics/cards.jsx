'use client'

import { FaCaretDown } from "react-icons/fa";

export default function Cards({data}) {
  return (
    <div className="h-full p-4 flex flex-col justify-between border border-black rounded-xl">
      <div className={"flex justify-between items-center"}>
        <h6 className={"text-md"}>{data.title}</h6>
        <div className={"p-1 bg-foreground rounded-md"}><FaCaretDown /></div>
      </div>
      <div className={"flex flex-col"}>
        <h4 className={"text-3xl"}>{data.value}</h4>
        <p className={"text-xs"}>{data.description}</p>
      </div>
    </div>
  )
}