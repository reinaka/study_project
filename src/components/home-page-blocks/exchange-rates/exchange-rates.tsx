import styles from "./exchange-rates.module.scss";
import { Loader } from "../../loader/loader";
import { getDate } from "../../../utils/getDate";

export const ExchangeRates = ({
  chosenRates,
}: {
  chosenRates: { title: string; rate: string }[];
}) => {
  return (
    <div className={styles.rates__wrapper}>
      <div className={styles["rates--top"]}>
        <h3 className={styles.rates__heading}>
          Exchange rate in internet bank
        </h3>
        <p className={styles["rates__text--datetime"]}>
          <span>
            Updates every 15 minutes, MSC <time>{getDate()}</time>
          </span>
        </p>
      </div>
      <h2 className={styles.currency__heading}>Currency</h2>
      {chosenRates && chosenRates.length ? (
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
        <Loader />
      )}
      <div className={styles.rates__list} role="button">
        All courses
      </div>
    </div>
  );
};
