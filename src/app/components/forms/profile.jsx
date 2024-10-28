'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Separator } from "@/app/components/ui/separator";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/app/components/ui/form";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export default function ProfileForm() {
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
        <h4 className={"text-2xl"}>Profile</h4>
        <p className={"text-sm"}>This is how others will see you on the site</p>
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
                    <Input placeholder={"John Doe"} {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name. It can be your real name or a pseudonym.
                    You can only change this once every 30 days.
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
                    <Input placeholder={"john_doe@email.com"} {...field} />
                  </FormControl>
                  <FormDescription>
                    You can manage verified email addresses in your email settings.
                  </FormDescription>
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
                    <Input placeholder={"secure_password1@"} {...field} />
                  </FormControl>
                  <FormDescription>
                    Change your current password here.
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