import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, useFormState } from "react-hook-form";

import { z } from "zod";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "./components/ui/form";

import { SeparatorDemo } from "./Separator";
import RolesInput from "./RolesInput";
import { FormTextField } from "./FormTextField";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 5 characters.",
  }),
  roles: z.array(z.string().min(1)).optional(),
});

export function ProfileForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      description: "",
      roles: [],
    },
  });

  const { handleSubmit } = methods;

  const formState = useFormState({ control: methods.control });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const onSubmit = async (data) => {
    if (formState.isValid) {
      // Assuming the data is successfully submitted to an API or processed
      console.log("Submitted Data:", data);
      setIsSubmitted(true);
      setIsCancelled(false);
    } else {
      // If any required field is not filled, display an error or alert
      alert("Please fill in all details and select a separator card.");
    }
  };

  const onCancel = () => {
    setIsSubmitted(false);
    setIsCancelled(true);
    methods.reset(); // Reset form fields
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="form-container max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormTextField
              control={methods.control}
              name="username"
              label="Name"
              placeholder="Company Name"
              description="What is the name of your company or team?"
              validation={formSchema.username}
            />
            <FormTextField
              control={methods.control}
              name="description"
              label="Description"
              placeholder="Company Description"
              description="Describe your company?"
              validation={formSchema.description}
            />
            <SeparatorDemo className="separator-demo" />
            <FormField
              control={methods.control}
              name="roles"
              render={() => (
                <FormItem className="form-item">
                  <FormLabel className="text-white">Roles</FormLabel>
                  <FormControl>
                    <RolesInput />
                  </FormControl>
                  <FormDescription className="form-description">
                    The current role you play in your company
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isSubmitted && <p>Details successfully submitted!</p>}
            {isCancelled && <p>Details cancelled!</p>}
            <div className="button-container">
              <Button type="button" className="bg-red-500 text-white" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 text-white">
                Submit
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
