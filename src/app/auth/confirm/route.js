import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type');
  const next = searchParams.get('next') ?? '/auth';
  
  if (token_hash && type) {
    const supabase = await createClient()
    
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      // redirect user to specified redirect URL or root of app
      redirect(next)
    }
  }
  
  // redirect the user to an error page with some instructions
  redirect('/error')
}