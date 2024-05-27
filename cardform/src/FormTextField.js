import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "./components/ui/form";
import { Input } from "./components/ui/input";

export function FormTextField({ control, name, label, placeholder, description, validation }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="form-item">
          <FormLabel className="text-white">{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} className="text-black" />
          </FormControl>
          <FormDescription className="form-description">
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
