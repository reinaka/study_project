import styles from "./label.module.scss";

export type LabelPropsT = {
  children: React.ReactNode;
  text: string;
  required?: boolean;
};

export const Label = ({ children, text, required }: LabelPropsT) => {
  return (
    <label className={styles.label}>
      <span className={styles.label__text}>
        {text}
        {required && <span className={styles["label__text--required"]}>*</span>}
      </span>
      {children}
    </label>
  );
};
