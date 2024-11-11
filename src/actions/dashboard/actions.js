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
  // console.log(response.data);
  
  return { message: response?.message, data: response.data, error: response?.error };
}