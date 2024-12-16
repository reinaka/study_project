import styles from "./rates-converter.module.scss";

export const RatesConverter = ({
  chosenRates,
}: {
  chosenRates: { title: string; rate: string }[];
}) => {
  return (
    <div className={styles.currency__wrapper}>
      <ul className={styles.currency__container}>
        {chosenRates.map(item => (
          <li className={styles.currencyItem__wrapper} key={item.title}>
            <span className={styles.currencyItem__title}>{item.title}:</span>
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
  );
};
