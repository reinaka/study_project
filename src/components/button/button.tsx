import styles from "./button.module.scss";

type ButtonPropsT = {
  children: string | React.ReactNode;
  radius: 8 | 16 | 20;
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
  return (
    <button
      className={`${styles.button} ${styles[`button--${radius}`]} ${color === "violet" ? styles["button--violet"] : styles[`button--blue`]}`}
      disabled={disabled}
      type={type || "button"}
    >
      <span>{children}</span>
    </button>
  );
};
