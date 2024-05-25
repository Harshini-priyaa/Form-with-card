"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "./components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "./components/ui/collapsible"
import { SeparatorDemo } from "./Separator";
import { Badge } from "./components/ui/badge"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Company Name" {...field} />
              </FormControl>
              <FormDescription>
                What is the name of your comapany or team?
              </FormDescription>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Company Description" {...field} />
              </FormControl>              
              <FormDescription>
                Describe about your company?
              </FormDescription>
              <SeparatorDemo />
              <Badge>Badge</Badge>


              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
