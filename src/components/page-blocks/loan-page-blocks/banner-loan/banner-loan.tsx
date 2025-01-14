import { Button } from "@components/ui/button";
import { CreditCard } from "@components/ui/credit-card";
import { InfoBlock } from "@components/ui/info-block/info-block";
import { Tooltip } from "@components/ui/tooltip";
import { BANNER_LOAN_ITEMS } from "./banner-loan-items.const";
import styles from "./banner-loan.module.scss";
import {
  selectPrescoringStore,
  usePrescoringStore,
} from "@store/prescoring.store";

export type BannerLoanPropsT = {
  handleScroll: () => void;
};

export const BannerLoan = ({ handleScroll }: BannerLoanPropsT) => {
  const offers = usePrescoringStore(selectPrescoringStore.offers);

  return (
    <section role="banner" className={styles.banner__wrapper}>
      <h1 className={styles.banner__heading}>Platinum digital credit card</h1>
      <p className={styles.banner__text}>
        Our best credit card. Suitable for everyday spending and shopping. Cash
        withdrawals and transfers without commission and interest.
      </p>
      <div className={styles.infoBlock__wrapper}>
        <ul className={styles.infoBlock__list}>
          {BANNER_LOAN_ITEMS.map(item => (
            <li key={item.id}>
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
        <Button
          radius={8}
          onClick={handleScroll}
          additionalStyles={styles.button}
        >
          {offers ? "Choose an offer" : "Apply for card"}
        </Button>
      </div>
      <CreditCard
        card={{ title: "credit card", src: "/credit-cards/card1.jpg" }}
        additionalStyles={styles.card}
      />
    </section>
  );
};
