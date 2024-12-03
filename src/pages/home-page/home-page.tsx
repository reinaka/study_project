import { useEffect, useState } from "react";
import { Banner } from "../../components/home-page-blocks/banner/banner";
import { ExchangeRates } from "../../components/home-page-blocks/exchange-rates/exchange-rates";
import { Features } from "../../components/home-page-blocks/features/features";
import { Locations } from "../../components/home-page-blocks/locations/locations";
import { Subscription } from "../../components/home-page-blocks/subscription/subscription";
import styles from "./home-page.module.scss";
import { ChosenRatesT } from "../../utils/getChosenRates";
import { getRates } from "../../utils/getRates";
import { getChosenRates } from "../../utils/getChosenRates";

export const HomePage = () => {
  const currenciesArr = ["USD", "CNY", "CHF", "EUR", "JPY", "TRY"];
  const [chosenRates, setChosenRates] = useState<ChosenRatesT>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCurrencyList = async () => {
    try {
      const allRates = await getRates("RUB");
      setChosenRates(getChosenRates(allRates, currenciesArr));
    } catch {
      setChosenRates(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCurrencyList();
  }, []);

  //для получения списка валют каждые 15 минут
  useEffect(() => {
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
