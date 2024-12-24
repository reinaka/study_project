import { RATES_CONDITIONS_ITEMS } from "./rates-conditions-items.const";
import styles from "./rates-conditions.module.scss";

export const RatesConditions = () => {
  return (
    <ul>
      {RATES_CONDITIONS_ITEMS.map(item => (
        <li key={item.title} className={styles.conditions__item}>
          <div className={styles.conditions__title}>{item.title}</div>
          {Array.isArray(item.content) ? (
            <div>
              {item.content.map(item => (
                <p className={styles.conditions__content}>{item}</p>
              ))}
            </div>
          ) : (
            <p className={styles.conditions__content}>{item.content}</p>
          )}
        </li>
      ))}
    </ul>
  );
};
