import styles from "./error-message.module.scss";

export type ErrorMessagePropsT = {
  children: string | React.ReactNode;
};

export const ErrorMessage = ({ children }: ErrorMessagePropsT) => {
  return (
    <p className={styles.error} data-testid="input-error">
      {children}
    </p>
  );
};
