import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./form.module.scss";

export type FormPropsT = {
  children: ReactNode;
  submitHandler: React.FormEventHandler<HTMLFormElement>;
  additionalStyles?: string;
  background?: "transparent" | "background";
};

export const Form = ({
  children,
  submitHandler,
  additionalStyles,
  background,
}: FormPropsT) => {
  const cx = classNames.bind(styles);
  const formStyles = cx({
    form__wrapper: true,
    [`form--${background ? "transparent" : "background"}`]: true,
    [`${additionalStyles}`]: additionalStyles,
  });

  return (
    <form onSubmit={submitHandler} className={formStyles} noValidate>
      {children}
    </form>
  );
};
