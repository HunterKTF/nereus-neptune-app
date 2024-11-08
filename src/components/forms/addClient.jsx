'use client'

import { addClient } from "@/actions/clients/actions";
import { useFormState } from "react-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FaPlus } from "react-icons/fa6";

const formSchema = z.object({
  client: z.string(),
  company: z.string(),
  email: z.string().email(),
});

export default function AddClient() {
  const initialState = {};
  const [formState, formAction] = useFormState(addClient, initialState);
  
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formAction)} className={"space-y-3"}>
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
            <Button type={"submit"}>Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}