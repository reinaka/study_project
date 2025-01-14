import classNames from "classnames/bind";
import { Label } from "../label";
import { ErrorMessage } from "../error-message";
import { InputPropsT } from "../inputProps.type";
import styles from "./select.module.scss";

export type SelectPropsT = Pick<
  InputPropsT,
  | "name"
  | "label"
  | "options"
  | "register"
  | "rules"
  | "additionalStyles"
  | "required"
  | "noDefault"
  | "error"
>;

export const Select = ({
  name,
  label,
  options,
  register,
  rules,
  error,
  noDefault,
  required,
  additionalStyles,
}: SelectPropsT) => {
  const cx = classNames.bind(styles);
  const inputStyles = cx({
    select__wrapper: true,
    [`select--invalid`]: error,
  });

  return (
    <Label text={label} additionalStyles={additionalStyles} required={required}>
      <div className={inputStyles}>
        <select
          className={styles.select}
          name={name}
          {...(register && register(name, rules))}
        >
          {noDefault && <option value="" hidden />}
          {options &&
            options.map((option: { text: string; value: string | number }) => (
              <option value={option.value} key={option.value}>
                {option.text}
              </option>
            ))}
        </select>
        {error && <ErrorMessage>{`${error}` || "Error"}</ErrorMessage>}
      </div>
    </Label>
  );
};
