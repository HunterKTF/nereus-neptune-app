"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { ChevronRight } from "lucide-react";

const formSchema = z.object({
  new_password: z.string(),
  confirm_password: z.string(),
});

export default function ResetForm() {
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema)
  });
  
  // Define submit handler
  function onSubmit(values) {
    console.log(values);
  }
  
  return (
    <div className={"w-full h-full flex flex-col justify-center items-center gap-11"}>
      <div className={"w-full flex flex-col items-center justify-center"}>
        <h2 className={"text-3xl"}>Recover your password</h2>
        <p>Please enter your new password</p>
      </div>
      <div className={"w-80 flex flex-col gap-4"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-3"}>
            <FormField
              control={form.control}
              name="new_password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input placeholder={"new_password1@"} {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder={"confirm_password1@"} {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button type={"submit"}
                    className={"w-full flex gap-1 bg-white text-black border border-white " +
                      "hover:bg-black hover:text-white hover:animate-out hover:duration-300"}>
              Update <ChevronRight size={18}/>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
