import styles from "./button.module.scss";

type ButtonPropsT = {
  children: string | React.ReactNode;
  radius: 8 | 16 | 20;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button = ({ children, radius, disabled, type }: ButtonPropsT) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${radius}`]}`}
      disabled={disabled}
      type={type || "button"}
    >
      <span>{children}</span>
    </button>
  );
};
