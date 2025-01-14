import classNames from "classnames/bind";
import styles from "./divider.module.scss";

export type DividerPropsT = {
  type?: "solid" | "dashed";
  thickness?: "narrow" | "wide";
  direction?: "vertical" | "horizontal";
  additionalStyles?: string;
};

export const Divider = ({
  type,
  direction,
  additionalStyles,
  thickness,
}: DividerPropsT) => {
  const cx = classNames.bind(styles);
  const dividerStyles = cx({
    divider: true,
    [`divider--${type ? type : "solid"}`]: true,
    [`divider--${thickness ? thickness : "narrow"}`]: true,
    [`divider--${direction ? direction : "horizontal"}`]: true,
    [`${additionalStyles}`]: additionalStyles,
  });

  return <div className={dividerStyles} />;
};
