import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "./components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "./components/ui/form";
import { SeparatorDemo } from "./SeparatorDemo";
import RolesInput from "./RolesInput";
import "./style.css";

const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  description: z.string().min(5, { message: "Description must be at least 5 characters." }),
  roles: z.array(z.object({ value: z.string().min(1, { message: "Role must be at least 1 character." }) })),
  businessModel: z.string().nonempty({ message: "Please select a separator card." }),
});

export function ProfileForm({ addProject }) {
  const navigate = useNavigate();
  const location = useLocation();
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", description: "", roles: [], businessModel: "" },
  });

  const { handleSubmit, control, reset, setValue } = methods;

  useEffect(() => {
    if (location.state && location.state.project) {
      const project = location.state.project;
      setValue('username', project.username);
      setValue('description', project.description);
      setValue('roles', project.roles.map(role => ({ value: role })));
      setValue('businessModel', project.businessModel);
    }
  }, [location, setValue]);

  const onSubmit = async (data) => {
    try {
      await methods.trigger();
      if (methods.formState.isValid) {
        const roles = data.roles.map(role => role.value);
        const projectData = { ...data, roles };
        addProject(projectData);
        toast.success('Your details have been successfully submitted!', {
          onClose: () => {
            navigate(`/project/${data.username}`);
          },
        });
      } else {
        alert("Please fill in all details and select a separator card.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onCancel = () => {
    reset();
    navigate('/');
  };

  const handleSeparatorSelect = (selectedCard) => {
    setValue('businessModel', selectedCard);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="form-container max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <ToastContainer />
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
      <FormItem className="form-item">
        <FormLabel className="text-white">{label}</FormLabel>
        <FormControl>
          <input
            className="form-input"
            placeholder={placeholder}
            {...field}
          />
        </FormControl>
        <FormDescription className="form-description">
          {description}
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default ProfileForm;
