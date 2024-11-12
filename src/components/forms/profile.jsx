'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { updateProfile } from "@/actions/auth/actions";
import { useFormState } from "react-dom";

import { toast } from "@/hooks/use-toast"

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
  name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().optional(),
});

export default function ProfileForm({ u_name, u_email }) {
  const initialState = {};
  const [formState, formAction] = useFormState(updateProfile, initialState);
  
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <p>Hello World</p>
      ),
    })
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
          <form onSubmit={form.handleSubmit(formAction)} className={"space-y-3"}>
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={u_name} type={"text"} />
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
                    <Input placeholder={u_email} {...field} />
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
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input placeholder={"Enter new password here..."} {...field} />
                  </FormControl>
                  <FormDescription>
                    Change your current password here.
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button onClick={onSubmit} type={"submit"}
                    className={"flex gap-1"}>
              Update profile
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}