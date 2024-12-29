import { Label } from "../../label";
import styles from "./select.module.scss";

export type SelectPropsT = {
  name: string;
  label: string;
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
  additionalStyles,
}: SelectPropsT) => {
  return (
    <Label text={label} additionalStyles={additionalStyles}>
      <div className={styles.select__wrapper}>
        <select className={styles.select} name={name}>
          {options.map((option: { text: string; value: string | number }) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </Label>
  );
};
