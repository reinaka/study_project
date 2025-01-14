import classNames from "classnames/bind";
import styles from "./credit-card.module.scss";

export type CreditCardT = {
  card: {
    title: string;
    src: string;
  };
  additionalStyles?: string;
};

export const CreditCard = ({ card, additionalStyles }: CreditCardT) => {
  const cx = classNames.bind(styles);
  const creditCardStyles = cx({
    card: true,
    [`${additionalStyles}`]: additionalStyles,
  });

  return (
    <div className={creditCardStyles}>
      <img src={card.src} alt={card.title} />
    </div>
  );
};
