import { useForm } from "react-hook-form";
import { Input } from "@components/ui/input";
import { Select } from "@components/ui/select";
import { FormItemT } from "@components/credit-card-page-blocks/prescoring-form";

export type FormPropsT = {
  data: FormItemT[];
  button: React.ReactNode;
  defaultValues: { [key: string]: string | number | Date | null };
};

export const Form = ({ data, button, defaultValues }: FormPropsT) => {
  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: defaultValues,
  });

  const handleFormSubmit = formData => {
    console.log(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {data.map(item =>
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
      {button}
    </form>
  );
};
