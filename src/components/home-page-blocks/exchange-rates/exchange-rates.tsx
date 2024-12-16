import { Loader } from "@ui/loader";
import { UPDATE_TIME } from "@utils/const";
import { getCurrentDate } from "@utils/functions";
import { getRates } from "@utils/functions";
import { getChosenRates } from "@utils/functions";
import { RateT } from "@utils/types";
import { useEffect, useState } from "react";

import styles from "./exchange-rates.module.scss";
import { RatesConverter } from "./rates-converter/rates-converter";

export type ExchangeRatesPropsT = {
  chosenRates: RateT[];
  loadingState: boolean;
};

export const ExchangeRates = () => {
  const currenciesArr = ["USD", "CNY", "CHF", "EUR", "JPY", "TRY"];
  const [chosenRates, setChosenRates] = useState<RateT[] | null>([]);
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
    const intervalId = setInterval(getCurrencyList, UPDATE_TIME);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.rates__wrapper}>
      <div className={styles["rates--top"]}>
        <h3 className={styles.rates__heading}>
          Exchange rate in internet bank
        </h3>
        <p className={styles["rates__text--datetime"]}>
          <span>
            Updates every 15 minutes, MSC <time>{getCurrentDate()}</time>
          </span>
        </p>
      </div>
      <h2 className={styles.currency__heading}>Currency</h2>

      {isLoading ? (
        <Loader />
      ) : chosenRates ? (
        <RatesConverter chosenRates={chosenRates} />
      ) : (
        <div className={styles.error__wrapper}>
          <p>Failed to load currency rates</p>
        </div>
      )}

      <div className={styles.rates__list}>All courses</div>
    </div>
  );
};
