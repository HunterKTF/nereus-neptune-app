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
  contpaqi: z.any().refine((file) => file?.length !== 0, "File is required"),
  aspel: z.any().refine((file) => file?.length !== 0, "File is required"),
  other: z.any().refine((file) => file?.length !== 0, "File is required"),
});

export default function UploadForm() {
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
  // Define submit handler
  function onSubmit(values) {
    console.log(values);
  }
  
  return (
    <div className={"w-full flex flex-col items-center justify-center gap-6"}>
      <div className={"w-[550px]"}>
        <h4 className={"text-2xl"}>Upload File</h4>
        <p className={"text-sm"}>Please upload your file in a yearly date range.</p>
      </div>
      <Separator className={"w-[550px]"} />
      <div className={"w-[550px] flex flex-col gap-5"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-3"}>
            <FormField
              control={form.control}
              name="contpaqi"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Contpaqi</FormLabel>
                  <FormControl>
                    <Input type={"file"} {...field} />
                  </FormControl>
                  <FormDescription>
                    Upload your auxiliary movements file in the format of XLSX.
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aspel"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Aspel</FormLabel>
                  <FormControl>
                    <Input type={"file"} {...field} />
                  </FormControl>
                  <FormDescription>
                    Upload your auxiliary movements file in the format of XLSX.
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="other"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Other</FormLabel>
                  <FormControl>
                    <Input type={"file"} {...field} />
                  </FormControl>
                  <FormDescription>
                    Upload your auxiliary movements file in the format of XLSX.
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button type={"submit"}
                    className={"flex gap-1"}>
              Add file
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}