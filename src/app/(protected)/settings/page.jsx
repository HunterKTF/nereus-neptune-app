import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import Navbar from "@/components/app/navbar";
import SettingsPanel from "@/components/app/panels/settings-panel";

export default async function Settings() {
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth')
  }
  
  return (
    <main className={"w-screen h-screen flex flex-col"}>
      <Navbar />
      <SettingsPanel {...data.user.user_metadata} />
    </main>
  )
}