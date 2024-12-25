import { Label } from "@ui/label";
import classNames from "classnames/bind";
import styles from "./input.module.scss";

export type InputPropsT = {
  type: string;
  placeholder: string;
  required?: boolean;
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  icon?: "success" | "failure";
};

export const Input = ({
  type,
  placeholder,
  required,
  onInputChange,
  icon,
}: InputPropsT) => {
  const cx = classNames.bind(styles);
  const inputStyles = cx({
    input__wrapper: true,
    [`input__wrapper--${icon}`]: icon,
  });

  return (
    <Label text="test" required={required}>
      <div className={inputStyles}>
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          required={required}
          onChange={onInputChange}
        />
      </div>
    </Label>
  );
};
