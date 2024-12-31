import { Label } from "../label";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";
import styles from "./select.module.scss";

export type SelectPropsT = {
  name: string;
  label: string;
  register?: UseFormRegister<FieldValues>;
  rules?: RegisterOptions<FieldValues, string> | undefined;
  options?: {
    value: string | number;
    text: string;
  }[];
  additionalStyles?: string;
};

export const Select = ({
  name,
  label,
  options,
  register,
  rules,
  additionalStyles,
}: SelectPropsT) => {
  return (
    <Label text={label} additionalStyles={additionalStyles}>
      <div className={styles.select__wrapper}>
        <select
          className={styles.select}
          name={name}
          {...(register && register(name, rules))}
        >
          {options &&
            options.map((option: { text: string; value: string | number }) => (
              <option value={option.value} key={option.value}>
                {option.text}
              </option>
            ))}
        </select>
      </div>
    </Label>
  );
};
