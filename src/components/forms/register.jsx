'use client'

import {useState, startTransition} from 'react';
import {useFormStatus} from "react-dom";
import {register} from "@/actions/auth/actions";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import { useToast } from "@/hooks/use-toast"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {ChevronRight} from "lucide-react";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
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
        <Submit />
      </form>
    </Form>
  )
}

export default function RegisterForm() {
  // Define success and error states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast()
  
  // Submit form function handler
  const onSubmit = (values) => {
    setTitle("");
    setDescription("");
    
    const data = JSON.parse(JSON.stringify(values));
    let formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    
    startTransition(() => {
      register(formData).then((result) => {
        setTitle(result.title);
        setDescription(result.message);
        
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
  
  return (
    <div className={"w-full h-full flex flex-col justify-center items-center gap-11"}>
      <div className={"w-full flex flex-col items-center justify-center"}>
        <h2 className={"text-3xl"}>Create an Account</h2>
        <p>Enter your data below to create your account</p>
      </div>
      <div className={"w-80 flex flex-col gap-4"}>
        <FormStructure action={onSubmit} />
      </div>
    </div>
  );
}
