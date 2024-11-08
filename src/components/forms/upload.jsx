'use client'

import { uploadData } from "@/actions/clients/actions";
import { useFormState } from "react-dom";

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  select: z.string(),
  contpaqi: z.any().refine((file) => file?.length !== 0, "File is required"),
  aspel: z.any().refine((file) => file?.length !== 0, "File is required").optional(),
  other: z.any().refine((file) => file?.length !== 0, "File is required").optional(),
});

export default function UploadForm({ tableData }) {
  const initialState = {};
  const [formState, formAction] = useFormState(uploadData, initialState);
  
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
  return (
    <div className={"w-full flex flex-col items-center justify-center gap-6"}>
      <div className={"w-[550px]"}>
        <h4 className={"text-2xl"}>Upload File</h4>
        <p className={"text-sm"}>Please upload your file in a yearly date range.</p>
      </div>
      <Separator className={"w-[550px]"} />
      <div className={"w-[550px] flex flex-col gap-5"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formAction)} className={"space-y-3"}>
            <FormField
              control={form.control}
              name="select"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Select Company</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={""}>
                        <SelectValue placeholder={"Select a client"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Clients</SelectLabel>
                        {
                          tableData.map((name) => {
                            return <SelectItem key={name.id_number} value={name.client_id}>
                              {name.company}
                            </SelectItem>
                          })
                        }
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormDescription>Select the client of the attached file</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            {formState?.message && (
              <p>{formState.message}</p>
            )}
          </form>
        </Form>
      </div>
    </div>
  )
}