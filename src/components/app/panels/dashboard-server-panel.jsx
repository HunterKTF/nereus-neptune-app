import { createClient } from "@/utils/supabase/server";

import DashboardPanel from "@/components/app/panels/dashboard-panel";

export default async function DashboardServerPanel() {
  const supabase = await createClient();
  
  const { data, error } = await supabase.from('clients').select('*');
  
  if (error) console.log(error.message);
  
  return (
    <DashboardPanel data={data} />
  )
}