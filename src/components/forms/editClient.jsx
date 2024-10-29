'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string(),
  company: z.string(),
  email: z.string().email(),
});

export default function EditForm() {
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  
  // Define submit handler
  function onSubmit(values) {
    console.log(values);
  }
  
  return (
    <div className={"w-full flex flex-col items-center justify-center gap-6"}>
      <div className={"w-[550px]"}>
        <h4 className={"text-2xl"}>Client Profile</h4>
        <p className={"text-sm"}>This is how others will see you on the site.</p>
      </div>
      <Separator className={"w-[550px]"} />
      <div className={"w-[550px] flex flex-col gap-5"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-3"}>
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder={"Client Name"} {...field} />
                  </FormControl>
                  <FormDescription>
                    Your client name will be displayed in the client table
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder={"Company Name"} {...field} />
                  </FormControl>
                  <FormDescription>
                    Your client company name will be displayed in the client table
                  </FormDescription>
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
                    <Input placeholder={"email@anywhere.com"} {...field} />
                  </FormControl>
                  <FormDescription>
                    Your client contact will not be displayed, but can be changed here
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button type={"submit"}
                    className={"flex gap-1"}>
              Update profile
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}