import { Label } from "../label";
import { InputPropsT } from "../inputProps.type";
import styles from "./select.module.scss";

export type SelectPropsT = Pick<
  InputPropsT,
  "name" | "label" | "options" | "register" | "rules" | "additionalStyles"
>;

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
