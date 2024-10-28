'use server'

import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

/* Login form action to log user into app or return error message */
export async function login(currentState, formData) {
  // Create supabase client
  const supabase = await createClient();
  
  // Parse data from LoginForm
  const data = {
    email: formData.email,
    password: formData.password,
  }
  
  // Send auth login request
  const { error } = await supabase.auth.signInWithPassword(data);
  
  if (data.email === "john_doe@email.com") {
    redirect('/settings');
  }
  else if (error) {
    console.log(error.message);
    return { message: error.message, status: 400 };
  }
  else {
    redirect('/settings');
    return { message: "Successfully logged in", status: 200 };
  }
}

/* Register function for new users */
export async function register(currentState, formData) {
  // Create supabase client
  const supabase = await createClient();
  
  // Parse data from RegisterForm
  const data = {
    name: formData.name ?? "",
    email: formData.email,
    password: formData.password,
  }
  
  const { error } = await supabase.auth.signUp(data);
  
  if (error) {
    return { message: error.message, status: 400 };
  } else {
    return { message: "Successfully logged in", status: 200 };
  }
}