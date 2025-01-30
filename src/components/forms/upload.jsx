'use client'

import {startTransition} from 'react';
import {useFormStatus} from "react-dom";
import {uploadData} from "@/actions/clients/actions";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import { useToast } from "@/hooks/use-toast";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
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
  clientId: z.string(),
  contpaqi: z.any().refine((file) => file?.length !== 0, "File is required"),
  aspel: z.any().refine((file) => file?.length !== 0, "File is required").optional(),
  other: z.any().refine((file) => file?.length !== 0, "File is required").optional(),
});

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  )
}

function FormStructure({action, tableData}) {
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(action)} className={"space-y-3"}>
        <FormField
          control={form.control}
          name="clientId"
          render={({field}) => (
            <FormItem>
              <FormLabel>Select Company</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={""}>
                    <SelectValue placeholder={"Select a client"}/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Clients</SelectLabel>
                    {
                      tableData.map((name) => {
                        return <SelectItem key={name.client_id} value={name.client_id}>
                          {name.company}
                        </SelectItem>
                      })
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormDescription>Select the client of the attached file</FormDescription>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contpaqi"
          render={({field: {value, onChange, ...fieldProps}}) => (
            <FormItem>
              <FormLabel>Contpaqi</FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  placeholder="Contpaqi Excel File"
                  type={"file"}
                  accept=".xls,.xlsx"
                  onChange={(event) =>
                    onChange(event.target.files && event.target.files[0])
                  }
                />
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
        <Submit />
      </form>
    </Form>
  )
}

export default function UploadForm({tableData}) {
  const { toast } = useToast();
  
  // Submit form function handler
  const onSubmit = (values) => {
    
    let formData = new FormData();
    formData.append('clientId', values.clientId);
    formData.append('file', values.contpaqi);
    
    startTransition(() => {
      uploadData(formData).then((result) => {
        if (result.status === 200) {
          toast({
            variant: "success",
            title: result.message,
            description: result.desc,
          })
        } else {
          toast({
            variant: "destructive",
            title: result.message,
            description: result.desc,
          })
        }
      });
    });
  };
  
  return (
    <div className={"w-full flex flex-col items-center justify-center gap-6"}>
      <div className={"w-[550px]"}>
        <h4 className={"text-2xl"}>Upload File</h4>
        <p className={"text-sm"}>Please upload your file in a yearly date range.</p>
      </div>
      <Separator className={"w-[550px]"}/>
      <div className={"w-[550px] flex flex-col gap-5"}>
        <FormStructure action={onSubmit} tableData={tableData} />
      </div>
    </div>
  )
}