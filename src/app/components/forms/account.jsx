'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns"
import { z } from "zod";

import { cn } from "@/lib/utils"
import { Separator } from "@/app/components/ui/separator";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Calendar } from "@/app/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/app/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

import { CalendarIcon } from "@radix-ui/react-icons"

const formSchema = z.object({
  name: z.string(),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  language: z.string(),
});

export default function AccountForm() {
  // Define my form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  
  // Define submit handler
  function onSubmit(values) {
    console.log(values);
  }
  
  return (
    <div className={"w-full flex flex-col items-center justify-center gap-6"}>
      <div className={"w-[550px]"}>
        <h4 className={"text-2xl"}>Account</h4>
        <p className={"text-sm"}>Update your account settings. Set your preferred language and timezone.</p>
      </div>
      <Separator className={"w-[550px]"}/>
      <div className={"w-[550px] flex flex-col gap-5"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-3"}>
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder={"John Doe"} {...field} />
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
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-64 pl-3 text-left bg-background font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span className={"text-neutral-500"}>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={"w-64"}>
                        <SelectValue className={"text-neutral-500"} placeholder="Select language" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    You can select the application language as preferred
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type={"submit"}
                    className={"flex gap-1"}>
              Update profile
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}