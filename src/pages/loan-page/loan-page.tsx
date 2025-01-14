import { useRef, useEffect } from "react";
import {
  BannerLoan,
  LoanTabs,
  GetCard,
  PrescoringWrapper,
} from "@components/page-blocks/loan-page-blocks";
import {
  usePrescoringStore,
  selectPrescoringStore,
} from "@store/prescoring.store";
import styles from "./loan-page.module.scss";

export const LoanPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const offers = usePrescoringStore(selectPrescoringStore.offers);
  const setOffers = usePrescoringStore(selectPrescoringStore.setOffers);

  useEffect(() => {
    if (!offers) {
      const storageOffers = localStorage.getItem("offers");
      if (storageOffers) setOffers(JSON.parse(storageOffers));
    }
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
