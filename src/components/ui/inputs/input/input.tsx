import { Label } from "../label";
import { ErrorMessage } from "../error-message";
import { InputPropsT } from "../inputProps.type";
import classNames from "classnames/bind";
import styles from "./input.module.scss";

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
      {error && (
        <ErrorMessage data-testid="input-error">
          {`${error}` || "Error"}
        </ErrorMessage>
      )}
    </>
  );
};
