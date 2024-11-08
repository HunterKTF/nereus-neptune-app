import { createClient } from "@/utils/supabase/server";

import ClientsPanel from "@/components/app/panels/clients-panel";

export default async function ClientsServerPanel() {
  const supabase = await createClient();
  
  const { data, error } = await supabase.from('clients').select('*');
  
  if (error) console.log(error.message);
  
  return (
    <ClientsPanel data={data} />
  )
}