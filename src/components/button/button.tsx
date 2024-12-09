import classNames from "classnames/bind";

import styles from "./button.module.scss";

export type ButtonPropsT = {
  children: string | React.ReactNode;
  radius?: 8 | 16 | 20;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  color?: "blue" | "violet";
};

export const Button = ({
  children,
  radius,
  disabled,
  type,
  color,
}: ButtonPropsT) => {
  const cx = classNames.bind(styles);
  const buttonStyles = cx({
    button: true,
    "button--violet": color === "violet",
    "button--blue": color === "blue" || color === undefined,
    "button--8": radius === 8,
    "button--16": radius === 16 || radius === undefined,
    "button--20": radius === 20,
  });

  return (
    <button
      className={buttonStyles}
      disabled={disabled}
      type={type || "button"}
    >
      <span>{children}</span>
    </button>
  );
};
