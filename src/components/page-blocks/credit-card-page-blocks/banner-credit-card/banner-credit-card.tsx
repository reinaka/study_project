import { Button } from "@components/ui/button";
import { CreditCard } from "@components/ui/credit-card";
import { InfoBlock } from "@components/ui/info-block/info-block";
import { Tooltip } from "@components/ui/tooltip";
import styles from "./banner-credit-card.module.scss";

const creditCardInfo = [
  {
    heading: "Up to 160 days",
    text: "No percent",
    tooltip: "When repaying the full debt up to 160 days.",
  },
  {
    heading: "Up to 600 000 ₽",
    text: "Credit limit",
    tooltip: "Over the limit willaccrue percent",
  },
  {
    heading: "0 ₽",
    text: "Card service is free",
    tooltip: "Promotion valid until December 31, 2022.",
  },
];

export type BannerCreditCardPropsT = {
  handleScroll: () => void;
};

export const BannerCreditCard = ({ handleScroll }: BannerCreditCardPropsT) => {
  return (
    <section role="banner" className={styles.banner__wrapper}>
      <h1 className={styles.banner__heading}>Platinum digital credit card</h1>
      <p className={styles.banner__text}>
        Our best credit card. Suitable for everyday spending and shopping. Cash
        withdrawals and transfers without commission and interest.
      </p>
      <div className={styles.infoBlock__wrapper}>
        <ul className={styles.infoBlock__list}>
          {creditCardInfo.map(item => (
            <li key={item.heading}>
              <Tooltip text={item.tooltip}>
                <InfoBlock
                  heading={item.heading}
                  text={item.text}
                  additionalStyles={styles.infoBlock}
                />
              </Tooltip>
            </li>
          ))}
        </ul>
        <Button radius={8} onClick={handleScroll}>
          Apply for card
        </Button>
      </div>
      <CreditCard
        card={{ title: "credit card", src: "/credit-cards/card1.jpg" }}
        additionalStyles={styles.card}
      />
    </section>
  );
};
