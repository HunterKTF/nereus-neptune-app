'use server'

// import { createClient } from '@/utils/supabase/server';
import axios from "axios";

/* Download client data from query */
export async function downloadData(values) {
  const response = await axios.post('http://localhost:3001/download',
    values,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }
  )
  
  // Print the response message in console
  console.log(JSON.stringify(response.data['data']));
  console.log(response.data['data']['']);
  
  return { message: response.data['message'], data: response.data['data'], error: response.data['error'] };
}