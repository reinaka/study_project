import classNames from "classnames/bind";
import styles from "./label.module.scss";

export type LabelPropsT = {
  children: React.ReactNode;
  text: string;
  required?: boolean;
  additionalStyles?: string;
};

export const Label = ({
  children,
  text,
  required,
  additionalStyles,
}: LabelPropsT) => {
  const cx = classNames.bind(styles);
  const labelStyles = cx({
    label: true,
    [`${additionalStyles}`]: additionalStyles,
  });

  return (
    <label className={labelStyles}>
      <span className={styles.label__text}>
        {text}
        {required && <span className={styles["label__text--required"]}>*</span>}
      </span>
      {children}
    </label>
  );
};
