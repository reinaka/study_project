import { ReactNode } from "react";
import styles from "./form.module.scss";

export type FormPropsT = {
  children: ReactNode;
  submitHandler: React.FormEventHandler<HTMLFormElement>;
};

export const Form = ({ children, submitHandler }: FormPropsT) => {
  return (
    <form onSubmit={submitHandler} className={styles.form__wrapper}>
      {children}
    </form>
  );
};
