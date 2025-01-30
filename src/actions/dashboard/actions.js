'use server'

// import { createClient } from '@/utils/supabase/server';
import axios from "axios";

const uri = process.env.SERVER_URL;

/* Download client data from query */
export async function downloadData(values) {
  let url = uri + '/download';
  const response = await axios.post(url,
    values,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }
  )
  
  console.log(response.data['data']);
  
  return { message: response.data['message'], data: response.data['data'], error: response.data['error'] };
}