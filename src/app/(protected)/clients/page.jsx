import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import Navbar from "@/components/app/navbar";
import ClientsServerPanel from "@/components/app/panels/clients-server-panel";

export default async function Clients () {
  const supabase = await createClient()
  
  let { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth')
  }
  
  return (
    <main className={"w-screen h-screen flex flex-col"}>
      <Navbar />
      <ClientsServerPanel />
    </main>
  )
}