import { ChosenRatesT } from "../../../utils/functions";
import { getCurrentDate } from "../../../utils/functions";
import { Loader } from "../../loader";
import styles from "./exchange-rates.module.scss";

export type ExchangeRatesPropsT = {
  chosenRates: ChosenRatesT;
  loadingState: boolean;
};

export const ExchangeRates = ({
  chosenRates,
  loadingState,
}: ExchangeRatesPropsT) => {
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
      {loadingState ? (
        <Loader />
      ) : chosenRates ? (
        <div className={styles.currency__wrapper}>
          <ul className={styles.currency__container}>
            {chosenRates.map(item => (
              <li className={styles.currencyItem__wrapper} key={item.title}>
                <span className={styles.currencyItem__title}>
                  {item.title}:
                </span>
                <span>{item.rate}</span>
              </li>
            ))}
          </ul>
          <img
            src="/exchange-building.svg"
            alt="exchange rates building icon"
            className={styles.currency__image}
          />
        </div>
      ) : (
        <div className={styles.error__wrapper}>
          <p>Failed to load currency rates</p>
        </div>
      )}
      <div className={styles.rates__list}>All courses</div>
    </div>
  );
};
