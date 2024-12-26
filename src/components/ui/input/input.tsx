import { Label } from "@components/ui/label";
import { UseFormRegister, RegisterOptions, FieldValues } from "react-hook-form";
import classNames from "classnames/bind";
import styles from "./input.module.scss";

export type InputPropsT = {
  type?: string;
  placeholder?: string;
  name: string;
  label: string;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  rules?: RegisterOptions<FieldValues, string> | undefined;
  error?: string;
  formSubmitted: boolean;
};

export const Input = ({
  type,
  placeholder,
  name,
  label,
  required,
  rules,
  register,
  error,
  formSubmitted,
}: InputPropsT) => {
  const cx = classNames.bind(styles);
  const inputStyles = cx({
    input__wrapper: true,
    [`input--invalid`]: error,
    [`input--valid`]: !error && required && formSubmitted,
  });

  return (
    <>
      <Label text={label} required={required}>
        <div className={inputStyles}>
          <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            {...(register && register(name, rules))}
          />
        </div>
      </Label>
      {error && <p className={styles.input__error}>{error || "Error"}</p>}
    </>
  );
};
