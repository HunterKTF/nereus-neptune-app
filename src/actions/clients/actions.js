'use server'

import { createClient } from '@/utils/supabase/server';
import axios from "axios";

const uri = process.env.SERVER_URL;


/* Create a client from button */
export async function addClient(formData) {
  const supabase = await createClient();
  
  const client_data = {
    client: formData.get('client'),
    company: formData.get('company'),
    email: formData.get('email'),
  }
  
  const { error } = await supabase.from('clients').insert(client_data);
  
  if (error) {
    console.log(error)
    return { message: error.message, status: 400 };
  } else {
    return { message: "Successfully added client!", status: 200 };
  }
}

/* List all clients from user */
export async function listClients() {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('clients').select('*');
  
  if (error) {
    return { message: error.message, status: 400 };
  } else {
    return { message: data, status: 200 };
  }
}

/* Get a single client data */
export async function getClient(currentState, formData) {
  const supabase = await createClient();
  
  const company = formData.company;
  
  const { data, error } = await supabase.from('clients').select()
                            .eq('company', company);
  
  if (error) {
    return { message: error.message, status: 400 };
  } else {
    return { message: data, status: 200 };
  }
}

/* Update a client information data */
export async function updateClient(currentState, formData) {
  const supabase = await createClient();
  
  const update_data = {};
  
  const clientId = formData.clientId;
  if (formData?.name) { update_data['name'] = formData.name }
  if (formData?.company) { update_data['company'] = formData.company }
  if (formData?.email) { update_data['email'] = formData.email }
  
  const { error } = await supabase.from('clients')
                                      .update(update_data).eq('client_id', clientId);
  
  if (error) {
    return { message: error.message, status: 400 };
  } else {
    return { message: "Successfully updated client", status: 200 };
  }
}

/* Delete a client and associated info */
export async function deleteClient(formData) {
  const supabase = await createClient();
  
  const clientId = formData.clientId;
  
  const response = await supabase
    .from('clients').delete().eq('client_id', clientId);
  
  if (response.status === 204) {
    return { message: "Successfully deleted client", status: 204 };
  } else {
    return { message: response, status: 400 };
  }
}

/* Upload client data file */
export async function uploadData(values) {
  try {
    let url = uri + '/upload';
    const response = await axios.post(url,
      values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }
    )
    
    // Print the number of documents posted in console
    // console.log(response.data);
    
    return { message: "Successfully uploaded file", desc: "", status: 200 };
  } catch (e) {
    console.log(e.message)
    return { message: "Error uploading file", desc: "No connection found", status: 400 };
  }
}