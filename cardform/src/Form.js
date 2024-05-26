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

import { SeparatorDemo } from "./Separator";
import { Badge } from "./components/ui/badge";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 5 characters.",
  }),
});

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="form-container max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="form-item">
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name" {...field} className="text-black" />
                  </FormControl> 
                  <FormDescription className="form-description">
                    What is the name of your company or team?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="form-item">
                  <FormLabel className="text-white">Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Description" {...field} className="text-black" />
                  </FormControl>
                  <FormDescription className="form-description">
                    Describe your company?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SeparatorDemo className="separator-demo" />
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem className="form-item">
                  <FormLabel className="text-white">Roles</FormLabel>
                  <FormControl>
                    <Input placeholder="Role " {...field} className="text-black" />
                  </FormControl>
                  <FormDescription className="form-description">
                    The current role you play in your company
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormMessage />
            <div className="button-container">
              <Button type="button" className="bg-red-500 text-white">
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 text-white">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
