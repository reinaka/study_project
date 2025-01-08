import classNames from "classnames/bind";
import styles from "./form-title.module.scss";

export type FormTitlePropsT = {
  text: string | React.ReactNode;
  step: number;
  additionalStyles?: string;
};

export const FormTitle = ({
  text,
  step,
  additionalStyles,
}: FormTitlePropsT) => {
  const cx = classNames.bind(styles);
  const formTitleStyles = cx({
    form__title: true,
    [`${additionalStyles}`]: additionalStyles,
  });

  return (
    <div className={formTitleStyles}>
      <h2 className={styles.form__heading}>{text}</h2>
      <div>Step {step} of 5</div>
    </div>
  );
};
