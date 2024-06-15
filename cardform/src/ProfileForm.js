import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  FormField,
  FormItem as OriginalFormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./components/ui/form";
import { SeparatorDemo } from "./SeparatorDemo";
import RolesInput from "./RolesInput";
import { useNavigate } from 'react-router-dom';
import "./style.css";

const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  description: z.string().min(5, { message: "Description must be at least 5 characters." }),
  roles: z.array(z.object({ value: z.string().min(1, { message: "Role must be at least 1 character." }) })),
  businessModel: z.string().nonempty({ message: "Please select a separator card." }),
});

export function ProfileForm({ addProject }) {
  const navigate = useNavigate();
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", description: "", roles: [], businessModel: "" },
  });

  const { handleSubmit, control, reset, setValue } = methods;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const onSubmit = async (data) => {
    try {
      await methods.trigger();
      if (methods.formState.isValid) {
        const roles = data.roles.map(role => role.value); // Extract role values
        const projectData = { ...data, roles }; // Combine role values with other data
        console.log("Submitted Data:", projectData); // Debugging: Check submitted data
        addProject(projectData);
        setIsSubmitted(true);
        setIsCancelled(false);
        alert("Details successfully submitted!");
        navigate(`/project/${data.username}`);
      } else {
        alert("Please fill in all details and select a separator card.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onCancel = () => {
    setIsSubmitted(false);
    setIsCancelled(true);
    reset();
  };

  const handleSeparatorSelect = (selectedCard) => {
    setValue('businessModel', selectedCard); // Set the selected card in form data
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="form-container max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <CustomFormItem
              control={control}
              name="username"
              label="Name"
              placeholder="Organization name"
              description="What's the name of your company or team?"
            />
            <CustomFormItem
              control={control}
              name="description"
              label="Description"
              placeholder="Company Description"
              description="Describe your company?"
            />
            <SeparatorDemo onCardSelect={handleSeparatorSelect} />
            <FormField
              control={control}
              name="roles"
              render={() => (
                <OriginalFormItem className="form-item">
                  <FormLabel className="text-white">Roles</FormLabel>
                  <FormControl>
                    <RolesInput />
                  </FormControl>
                  <FormDescription className="form-description">
                    The current role you play in your company
                  </FormDescription>
                  <FormMessage />
                </OriginalFormItem>
              )}
            />
            {isSubmitted && <p>Details successfully submitted!</p>}
            {isCancelled && <p>Details cancelled!</p>}
            <div className="button-container">
              <Button type="submit" className="submit-button">Submit</Button>
              <Button type="button" onClick={onCancel} className="cancel-button">Cancel</Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

const CustomFormItem = ({ control, name, label, placeholder, description }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <OriginalFormItem className="form-item">
        <FormLabel className="text-white">{label}</FormLabel>
        <FormControl>
          <input
            {...field}
            placeholder={placeholder}
            className="text-black form-input"
          />
        </FormControl>
        <FormDescription className="form-description">
          {description}
        </FormDescription>
        <FormMessage />
      </OriginalFormItem>
    )}
  />
);

export default ProfileForm;
