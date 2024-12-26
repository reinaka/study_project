import styles from "./tooltip.module.scss";

export type TooltipPropsT = {
  children: string | React.ReactNode;
  text: string;
};

export const Tooltip = ({ children, text }: TooltipPropsT) => {
  return (
    <div className={styles.tooltip} data-tooltip={text}>
      {children}
    </div>
  );
};
