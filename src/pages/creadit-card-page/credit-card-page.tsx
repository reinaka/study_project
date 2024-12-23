import { BannerCreditCard } from "@components/credit-card-page-blocks/banner-credit-card";
import { Tabs } from "@ui/tabs";
import styles from "./credit-card-page.module.scss";

export const CreditCardPage = () => {
  return (
    <div className={styles.page__wrapper}>
      <BannerCreditCard />
      <Tabs />
    </div>
  );
};
