'use client'

import {startTransition} from "react";
import {useFormStatus} from "react-dom";
import { addClient } from "@/actions/clients/actions";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { FaPlus } from "react-icons/fa6";

const formSchema = z.object({
  client: z.string(),
  company: z.string(),
  email: z.string().email(),
});

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  )
}

function FormStructure({action}) {
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(action)} className={"space-y-3"}>
        <FormField
          control={form.control}
          name="client"
          render={({field}) => (
            <FormItem>
              <FormLabel>Client</FormLabel>
              <FormControl>
                <Input type={"text"} placeholder={"Client Name"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({field}) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input type={"text"} placeholder={"Client Company"} {...field} />
              </FormControl>
              <FormMessage />
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
                <Input type={"email"} placeholder={"client_email@email.com"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Submit />
      </form>
    </Form>
  )
}

export default function AddClient() {
  const { toast } = useToast();
  
  const onSubmit = (values) => {
    let formData = new FormData();
    formData.append("client", values.client);
    formData.append("company", values.company);
    formData.append("email", values.email);
    
    startTransition(() => {
      addClient(formData).then((result) => {
        if (result.status === 200) {
          alert(result.message)
          window.location.reload();
        } else {
          toast({
            variant: "destructive",
            title: result.message,
          })
        }
      })
    })
  }
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Add Client <FaPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background border border-transparent">
        <DialogHeader>
          <DialogTitle>Add New Client</DialogTitle>
          <DialogDescription>
            Please enter your client&apos;s data
          </DialogDescription>
        </DialogHeader>
        <FormStructure action={onSubmit} />
      </DialogContent>
    </Dialog>
  )
}