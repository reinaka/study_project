import { useEffect, useState } from "react";

import { Banner } from "../../components/home-page-blocks/banner";
import { ExchangeRates } from "../../components/home-page-blocks/exchange-rates";
import { Features } from "../../components/home-page-blocks/features";
import { Locations } from "../../components/home-page-blocks/locations";
import { Subscription } from "../../components/home-page-blocks/subscription";
import { ChosenRatesT } from "../../utils/getChosenRates";
import { getChosenRates } from "../../utils/getChosenRates";
import { getRates } from "../../utils/getRates";
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
      <Subscription />
    </div>
  );
};
