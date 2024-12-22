import classNames from "classnames/bind";
import styles from "./info-block.module.scss";

export type InfoBlockPropsT = {
  heading: string;
  text: string;
  image?: string;
  type?: "full" | "compact";
  additionalStyles?: string;
};

export const InfoBlock = ({
  image,
  heading,
  text,
  type,
  additionalStyles,
}: InfoBlockPropsT) => {
  const cx = classNames.bind(styles);
  const infoBlockStyles = cx({
    infoBlock__wrapper: true,
    [`infoBlock--${type === "full" ? "full" : "compact"}`]: true,
    [`${additionalStyles}`]: additionalStyles,
  });

  return (
    <div className={infoBlockStyles}>
      {image && <img src={image} className={styles.infoBlock__image} />}
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};
