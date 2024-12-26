import { useForm } from "react-hook-form";
import { Button, Select, Input } from "@components/ui";
import { FORM_ITEMS } from "./prescoring-form-items.const";

export const PrescoringForm = () => {
  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const handleFormSubmit = formData => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {FORM_ITEMS.map(item =>
        item.elem === "input" ? (
          <Input
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            label={item.label}
            rules={item.rules}
            register={register}
            required={!!item.rules?.required}
            error={errors[item.name]?.message}
            key={item.name}
            formSubmitted={isSubmitted}
          />
        ) : (
          <Select
            name={item.name}
            label={item.label}
            options={item.options}
            key={item.name}
          />
        ),
      )}
      <Button type="submit">Continue</Button>
    </form>
  );
};
