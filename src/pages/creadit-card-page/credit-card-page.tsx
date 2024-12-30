import { useRef } from "react";
import {
  BannerCreditCard,
  CreditCardTabs,
  GetCard,
  PrescoringForm,
} from "@components/page-blocks/credit-card-page-blocks";
import styles from "./credit-card-page.module.scss";

export const CreditCardPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });

  return (
    <div className={styles.page__wrapper}>
      <BannerCreditCard handleScroll={handleScroll} />
      <CreditCardTabs />
      <GetCard />
      <div ref={ref}>
        <PrescoringForm />
      </div>
    </div>
  );
};
