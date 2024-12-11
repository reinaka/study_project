import { useEffect, useState } from "react";

import { Banner } from "../../components/home-page-blocks/banner";
import { ExchangeRates } from "../../components/home-page-blocks/exchange-rates";
import { Features } from "../../components/home-page-blocks/features";
import { Locations } from "../../components/home-page-blocks/locations";
import { News } from "../../components/home-page-blocks/news";
import { Subscription } from "../../components/home-page-blocks/subscription";
import { getChosenRates } from "../../utils/functions";
import { ChosenRatesT } from "../../utils/functions";
import { getRates } from "../../utils/functions";
import styles from "./home-page.module.scss";

export const HomePage = () => {
  const currenciesArr = ["USD", "CNY", "CHF", "EUR", "JPY", "TRY"];
  const [chosenRates, setChosenRates] = useState<ChosenRatesT>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCurrencyList = async () => {
    try {
      setIsLoading(true);
      const allRates = await getRates("RUB");
      setChosenRates(getChosenRates(allRates, currenciesArr));
    } catch {
      setChosenRates(null);
    } finally {
      setIsLoading(false);
    }
  };

  //для получения списка валют каждые 15 минут
  useEffect(() => {
    void getCurrencyList();
    const intervalId = setInterval(getCurrencyList, 1000 * 60 * 15);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.home__wrapper}>
      <Banner />
      <Features />
      <ExchangeRates chosenRates={chosenRates} loadingState={isLoading} />
      <Locations />
      <News />
      <Subscription />
    </div>
  );
};
