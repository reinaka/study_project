import { useRef, useEffect } from "react";
import {
  BannerLoan,
  LoanTabs,
  GetCard,
  PrescoringWrapper,
} from "@components/page-blocks/loan-page-blocks";
import { usePrescoringStore, selectPrescoring } from "@store/prescoring.store";
import styles from "./loan-page.module.scss";

export const LoanPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const setOffers = usePrescoringStore(selectPrescoring.setOffers);

  useEffect(() => {
    const offers = localStorage.getItem("offers");
    if (offers) setOffers(JSON.parse(offers));
  }, []);

  const handleScroll = () =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });

  return (
    <div className={styles.page__wrapper}>
      <BannerLoan handleScroll={handleScroll} />
      <LoanTabs />
      <GetCard />
      <div ref={ref}>
        <PrescoringWrapper />
      </div>
    </div>
  );
};
