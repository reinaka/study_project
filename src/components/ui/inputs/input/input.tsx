import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { Label } from "@components/ui/inputs/label";
import { UseFormRegister, RegisterOptions, FieldValues } from "react-hook-form";
import classNames from "classnames/bind";
import styles from "./input.module.scss";
import { ErrorMessage } from "../error-message";

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
};

export const Input = ({
  type,
  placeholder,
  inputmode,
  name,
  label,
  required,
  rules,
  register,
  error,
  formSubmitted,
  additionalStyles,
}: InputPropsT) => {
  const cx = classNames.bind(styles);
  const inputStyles = cx({
    input__wrapper: true,
    [`input--invalid`]: error,
    [`input--valid`]: !error && required && formSubmitted,
  });

  return (
    <>
      <Label
        text={label}
        required={required}
        additionalStyles={additionalStyles}
      >
        <div className={inputStyles}>
          <input
            name={name}
            className={styles.input}
            type={type === "date" ? "text" : type}
            placeholder={placeholder}
            inputMode={inputmode}
            {...(register && register(name, rules))}
            // Тут начинаются костыли
            onFocus={
              type === "date" ? e => (e.target.type = "date") : undefined
            }
            onBlur={type === "date" ? e => (e.target.type = "text") : undefined}
            onWheel={
              type === "number"
                ? (e: React.WheelEvent<HTMLInputElement>) =>
                    e.currentTarget.blur()
                : undefined
            }
          />
        </div>
      </Label>
      {error && <ErrorMessage>{`${error}` || "Error"}</ErrorMessage>}
    </>
  );
};
