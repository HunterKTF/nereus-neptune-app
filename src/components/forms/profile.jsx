'use client'

import {startTransition} from 'react';
import {useFormStatus} from "react-dom";
import { updateProfile } from "@/actions/auth/actions";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";
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

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Update Profile"}
    </Button>
  );
}

function FormStructure({action, u_name, u_email}) {
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(action)} className={"space-y-3"}>
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
        <Submit />
      </form>
    </Form>
  )
}

export default function ProfileForm({ u_name, u_email }) {
  const { toast } = useToast();
  
  // Submit form function handler
  const onSubmit = (values) => {
    let formData = new FormData();
    
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    
    startTransition(() => {
      updateProfile(formData).then((result) => {
        
        if (result.status === 400) {
          toast({
            variant: "destructive",
            title: result.title,
            description: result.message,
          })
        } else {
          alert(result.message);
        }
      })
    });
  }
  
  return (
    <div className={"w-full flex flex-col items-center justify-center gap-6"}>
      <div className={"w-[550px]"}>
        <h4 className={"text-2xl"}>Profile</h4>
        <p className={"text-sm"}>This is how others will see you on the site</p>
      </div>
      <Separator className={"w-[550px]"} />
      <div className={"w-[550px] flex flex-col gap-5"}>
        <FormStructure action={onSubmit} u_name={u_name} u_email={u_email} />
      </div>
    </div>
  )
}