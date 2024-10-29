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
  
  if (error) {
    console.log(error.message);
    return { message: error.message, status: 400 };
  }
  else {
    redirect('/settings');
  }
}


/* Register function for new users */
export async function register(currentState, formData) {
  // Create supabase client
  const supabase = await createClient();
  
  // Parse data from RegisterForm
  const data = {
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name ?? "",
        username: formData.name ?? "",
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
    return { message: error.message, status: 400 };
  } else {
    return { message: "Successfully registered user", status: 200 };
  }
}


/* Update user information */
export async function update(currentState, formData) {
  const supabase = await createClient();
  
  const data = {}
}