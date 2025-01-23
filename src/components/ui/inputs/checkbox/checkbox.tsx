import { UseFormRegister, FieldValues } from "react-hook-form";
import styles from "./checkbox.module.scss";

export type CheckboxPropsT = {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
};

export const Checkbox = ({ label, name, register }: CheckboxPropsT) => {
  return (
    <div className={styles.checkbox__wrapper}>
      <input
        type="checkbox"
        id="checkbox"
        className={styles.checkbox}
        {...(register &&
          register(name, {
            required: true,
          }))}
      />
      <label htmlFor="checkbox" className={styles.checkbox__label}>
        {label}
      </label>
    </div>
  );
};
