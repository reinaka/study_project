import { RATES_CONDITIONS_ITEMS } from "./rates-conditions-items.const";
import styles from "./rates-conditions.module.scss";

export const RatesConditions = () => {
  return (
    <ul>
      {RATES_CONDITIONS_ITEMS.map(item => (
        <li key={item.id} className={styles.conditions__item}>
          <div className={styles.conditions__title}>{item.title}</div>
          {Array.isArray(item.content) ? (
            <ul>
              {item.content.map(item => (
                <li key={item}>
                  <p className={styles.conditions__content}>{item}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.conditions__content}>{item.content}</p>
          )}
        </li>
      ))}
    </ul>
  );
};
