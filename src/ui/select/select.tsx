import { Label } from "@ui/label";
import styles from "./select.module.scss";

export type SelectPropsT = {
  text: string;
  required?: boolean;
  options: {
    text: string;
    value: string;
  }[];
};

export const Select = ({ text, required, options }: SelectPropsT) => {
  return (
    <Label text={text} required={required}>
      <div className={styles.select__wrapper}>
        <select className={styles.select}>
          {options.map((option: { text: string; value: string }) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </Label>
  );
};
