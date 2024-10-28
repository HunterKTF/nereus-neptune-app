"use client"

import { register } from "@/actions/auth/actions";
import { useFormState } from "react-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";

import { ChevronRight } from "lucide-react";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export default function RegisterForm() {
  const initialState = {};
  const [formState, formAction] = useFormState(register, initialState);
  
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  
  return (
    <div className={"w-full h-full flex flex-col justify-center items-center gap-11"}>
      <div className={"w-full flex flex-col items-center justify-center"}>
        <h2 className={"text-3xl"}>Create an Account</h2>
        <p>Enter your data below to create your account</p>
      </div>
      <div className={"w-80 flex flex-col gap-4"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formAction)} className={"space-y-3"}>
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder={"John Doe"} {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder={"john_doe@email.com"} {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type={"password"} placeholder={"secure_password1@"} {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button type={"submit"}
                    className={"w-full flex gap-1"}>
              Submit <ChevronRight size={18}/>
            </Button>
            {formState?.message && (
              <p className={"text-red-600"}>
                {formState.message}
              </p>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
