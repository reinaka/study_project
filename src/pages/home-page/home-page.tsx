import { Banner } from "@components/home-page-blocks/banner";
import { ExchangeRates } from "@components/home-page-blocks/exchange-rates";
import { Features } from "@components/home-page-blocks/features";
import { Locations } from "@components/home-page-blocks/locations";
import { News } from "@components/home-page-blocks/news";
import { Subscription } from "@components/home-page-blocks/subscription";
import styles from "./home-page.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.home__wrapper}>
      <Banner />
      <Features />
      <ExchangeRates />
      <Locations />
      <News />
      <Subscription />
    </div>
  );
};
