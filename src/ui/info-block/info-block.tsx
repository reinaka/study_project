import classNames from "classnames/bind";
import styles from "./info-block.module.scss";

export type InfoBlockPropsT = {
  heading: string;
  text: string;
  icon?: React.ReactNode;
  type?: "full" | "compact";
  reverse?: boolean;
  additionalStyles?: string;
};

export const InfoBlock = ({
  icon,
  heading,
  text,
  type,
  reverse,
  additionalStyles,
}: InfoBlockPropsT) => {
  const cx = classNames.bind(styles);
  const infoBlockStyles = cx({
    infoBlock__wrapper: true,
    [`infoBlock--${type === "full" ? "full" : "compact"}`]: true,
    [`${additionalStyles}`]: additionalStyles,
    "infoBlock--reverse": reverse,
  });

  return (
    <div className={infoBlockStyles}>
      {icon && <div className={styles.infoBlock__icon}>{icon}</div>}
      {reverse ? (
        <>
          <p>{text}</p>
          <h3>{heading}</h3>
        </>
      ) : (
        <>
          <h3>{heading}</h3>
          <p>{text}</p>
        </>
      )}
    </div>
  );
};
