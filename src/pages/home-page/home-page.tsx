import {
  BannerHome,
  Features,
  ExchangeRates,
  Locations,
  News,
  Subscription,
} from "@components/page-blocks/home-page-blocks";
import styles from "./home-page.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.page__wrapper}>
      <BannerHome />
      <Features />
      <ExchangeRates />
      <Locations />
      <News />
      <Subscription />
    </div>
  );
};
