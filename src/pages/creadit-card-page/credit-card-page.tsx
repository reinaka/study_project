import {
  BannerCreditCard,
  CreditCardTabs,
  PrescoringForm,
} from "@components/credit-card-page-blocks";
import styles from "./credit-card-page.module.scss";

export const CreditCardPage = () => {
  return (
    <div className={styles.page__wrapper}>
      <BannerCreditCard />
      <CreditCardTabs />
      <PrescoringForm />
    </div>
  );
};
