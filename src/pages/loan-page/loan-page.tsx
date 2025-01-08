import { useRef } from "react";
import {
  BannerLoan,
  LoanTabs,
  GetCard,
  PrescoringForm,
} from "@components/page-blocks/loan-page-blocks";
import styles from "./loan-page.module.scss";

export const LoanPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });

  return (
    <div className={styles.page__wrapper}>
      <BannerLoan handleScroll={handleScroll} />
      <LoanTabs />
      <GetCard />
      <div ref={ref}>
        <PrescoringForm />
      </div>
    </div>
  );
};
