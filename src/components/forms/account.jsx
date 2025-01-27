'use client'

import {useState, startTransition} from 'react';
import {useFormStatus} from "react-dom";
import { useFormState } from "react-dom";
import { updateProfile, deleteAccount } from "@/actions/auth/actions";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const formSchema = z.object({
  username: z.string().optional(),
  language: z.string().optional(),
});

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

function FormStructure({action, u_username}) {
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(action)} className={"space-y-3"}>
        <FormField
          control={form.control}
          name="username"
          render={({field}) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder={u_username} {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile and in emails.
              </FormDescription>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({field}) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={"w-64"}>
                    <SelectValue className={"text-neutral-500"} placeholder="Select language"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                This feature is work-in-progress.
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

export default function AccountForm({ u_username, u_language, u_id }) {
  const initialState = {};
  const [formStateDelete, formActionDelete] = useFormState(deleteAccount, initialState);
  
  const { toast } = useToast();
  
  // Submit form function handler
  const onSubmit = (values) => {
    
    const data = JSON.parse(JSON.stringify(values));
    let formData = new FormData();
    formData.append('username', values.username);
    formData.append('language', values.language);
    
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
    })
  }
  
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      language: u_language,
    }
  });

  return (
    <div className={"w-full flex flex-col items-center justify-center gap-6"}>
      <div className={"w-[550px]"}>
        <h4 className={"text-2xl"}>Account</h4>
        <p className={"text-sm"}>Update your account settings. Set your preferred language and timezone.</p>
      </div>
      <Separator className={"w-[550px]"}/>
      <div className={"w-[550px] flex flex-col gap-5"}>
        <FormStructure action={onSubmit} u_username={u_username} />
      </div>
      <Separator className={"w-[550px]"}/>
      <div className={"w-[550px]"}>
        <h4 className={"text-2xl"}>Delete User</h4>
        <p className={"text-sm"}>Update your account settings. Set your preferred language and timezone.</p>
      </div>
      <div className={"w-[550px] flex flex-col gap-5"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formActionDelete)} className={"space-y-3"}>
            <input hidden id={"userId"} name={"userId"} value={u_id} disabled={true} />
            <AlertDialog>
              <AlertDialogTrigger className={"bg-red-600 text-white px-4 py-1.5 rounded-md"}>
                Delete User
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className={"bg-red-600"}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </form>
        </Form>
      </div>
    </div>
  )
}