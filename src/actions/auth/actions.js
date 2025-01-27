'use server'

import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from "@/utils/supabase/admin";


/* Login form action to log user into app or return error message */
export async function login(formData) {
  // Create supabase client
  const supabase = await createClient();
  
  // Parse data from LoginForm
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }
  
  // Send auth login request
  const { error } = await supabase.auth.signInWithPassword(data);
  
  if (error) {
    return { title: "Error while logging in", message: error.message, status: 400 };
  }
  else {
    redirect('/settings');
  }
}


/* Register function for new users */
export async function register(formData) {
  // Create supabase client
  const supabase = await createClient();
  
  // Parse data from RegisterForm
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
    options: {
      data: {
        name: formData.get('name') ?? "",
        username: formData.get('name') ?? "",
        notify: "all",
        toggle: {
          marketing: false,
          security: true,
          social: false,
        }
      }
    }
  }
  
  const { error } = await supabase.auth.signUp(data);
  
  if (error) {
    return { title: "Error setting up you account", message: error.message, status: 400 };
  } else {
    return {  title: "Success!",
      message: "Successfully registered user. You can now close this page and check your email",
      status: 200
    };
  }
}


/* Update user information */
export async function updateProfile(formData) {
  const supabase = await createClient();
  
  const update_data = { data: {} };
  
  if (formData?.name){
    update_data.data.name = formData.name;
  }
  if (formData?.username) {
    update_data.data.username = formData.username;
  }
  if (formData?.language) {
    update_data.data.language = formData.language;
  }
  if (formData?.email){
    update_data.email = formData.email;
  }
  if (formData?.password){
    update_data.password = formData.password;
  }
  
  const { error } = await supabase.auth.updateUser(update_data);
  
  if (error) {
    return { title: "Error updating your profile", message: error.message, status: 400 };
  } else {
    return { title: "Success!", message: "Successfully updated user", status: 200 };
  }
}

/* Update user notification settings */
export async function updateNotifications(currentState, formData) {
  const supabase = await createClient();
  
  const update_data = { data: { toggle: {} } };
  
  update_data.data['toggle']['marketing'] = false;
  update_data.data['toggle']['security'] = false;
  update_data.data['toggle']['social'] = false;
  
  if (formData?.type) { update_data.data['notify'] = formData.type }
  if (formData?.marketing) { update_data.data['toggle']['marketing'] = formData.marketing }
  if (formData?.security) { update_data.data['toggle']['security'] = formData.security }
  if (formData?.social) { update_data.data['toggle']['social'] = formData.social }
  
  const { error } = await supabase.auth.updateUser(update_data);
  
  if (error) {
    return { message: error.message, status: 400 };
  } else {
    return { message: "Successfully updated user", status: 200 };
  }
}

/* Delete user account */
export async function deleteAccount(currentState, formData) {
  const supabase = await createAdminClient();
  
  const userId = formData.userId;
  
  const { error } = await supabase.auth.admin.deleteUser(
    userId
  )
  
  if (error) {
    return { message: error.message, status: 400 };
  } else {
    return { message: "Successfully deleted user", status: 200 };
  }
}