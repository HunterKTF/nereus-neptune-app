'use client'

import {useState, startTransition} from 'react';
import {uploadData} from "@/actions/clients/actions";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import { toast } from "@/hooks/use-toast"
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

export default function UploadForm({tableData}) {
  // Define success and error states
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
  const onSubmit = (values) => {
    setError("");
    setSuccess("");
    
    const data = JSON.parse(JSON.stringify(values));
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    let formData = new FormData();
    formData.append('clientId', values.clientId);
    formData.append('file', values.contpaqi);
    
    startTransition(() => {
      uploadData(formData).then((result) => {
        setError(result.error);
        setSuccess(result.success);
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-3"}>
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
                            return <SelectItem key={name.id_number} value={name.client_id}>
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