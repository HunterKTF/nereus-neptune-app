"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import ForgotPassword from "@/components/forms/forgotPassword";

import { ChevronRight } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginForm() {
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
  // Define submit handler
  function onSubmit(values) {
    console.log(values);
  }
  
  return (
    <div className={"w-full h-full flex flex-col justify-center items-center gap-11"}>
      <div className={"w-full flex flex-col items-center justify-center"}>
        <h2 className={"text-3xl"}>Sign in to your account</h2>
        <p>Enter your data below to sign in</p>
      </div>
      <div className={"w-80 flex flex-col gap-4"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-3"}>
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder={"john_doe@email.com"} {...field} />
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
                    <Input placeholder={"secure_password1@"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type={"submit"}
                    className={"w-full flex gap-1 bg-white text-black border border-white " +
                      "hover:bg-black hover:text-white hover:animate-out hover:duration-200"}>
              Submit <ChevronRight size={18} />
            </Button>
          </form>
        </Form>
        <div className={"w-full flex justify-between"}>
          <div className={"flex gap-2 items-center justify-center"}>
            <Checkbox className={"border-white bg-black"} id="remember-me" />
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
