import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
  RegisterOptions,
  FieldValues
} from "react-hook-form";

export type InputPropsT = {
  type?: string;
  placeholder?: string;
  inputmode?:
    | "search"
    | "text"
    | "numeric"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "decimal"
    | undefined;
  name: string;
  label: string;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  rules?: RegisterOptions<FieldValues, string> | undefined;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  formSubmitted: boolean;
  additionalStyles?: string;
  options?: {
    value: string | number;
    text: string;
  }[];
};
