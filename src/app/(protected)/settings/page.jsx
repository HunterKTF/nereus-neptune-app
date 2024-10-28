import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import Navbar from "@/app/components/app/navbar";
import SettingsPanel from "@/app/components/app/panels/settings-panel";

export default async function Settings() {
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  
  return (
    <main className={"w-screen h-screen flex flex-col"}>
      <Navbar />
      <SettingsPanel />
    </main>
  )
}