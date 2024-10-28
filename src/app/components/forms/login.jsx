"use client"

import { login } from "@/actions/auth/actions";
import { useFormState } from "react-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";

import ForgotPassword from "@/app/components/forms/forgotPassword";

import { ChevronRight } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginForm() {
  const initialState = {};
  const [formState, formAction] = useFormState(login, initialState);
  
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
  return (
    <div className={"w-full h-full flex flex-col justify-center items-center gap-11"}>
      <div className={"w-full flex flex-col items-center justify-center"}>
        <h2 className={"text-3xl"}>Sign in to your account</h2>
        <p>Enter your data below to sign in</p>
      </div>
      <div className={"w-80 flex flex-col gap-4"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formAction)} className={"space-y-3"}>
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type={"email"} placeholder={"john_doe@email.com"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type={"password"} placeholder={"secure_password1@"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type={"submit"}
                    className={"flex w-full justify-center items-center gap-1"}>
              Submit <ChevronRight size={18} />
            </Button>
            {formState?.message && (
              <p>formState.message</p>
            )}
          </form>
        </Form>
        <div className={"w-full flex justify-between"}>
          <div className={"flex gap-2 items-center justify-center"}>
            <Checkbox className={""} id="remember-me" />
            <label
              htmlFor="remember-me"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed
              peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <ForgotPassword />
        </div>
      </div>
    </div>
  );
}
