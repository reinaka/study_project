import { InfoBlock } from "@components/ui/info-block/info-block";
import { CASHBACK_ITEMS } from "./cashback-items.const";
import styles from "./cashback.module.scss";

export const Cashback = () => {
  return (
    <ul className={styles.cashback__wrapper}>
      {CASHBACK_ITEMS.map(item => (
        <li key={item.content} className={styles.cashback__item}>
          <InfoBlock
            heading={item.title}
            text={item.content}
            type="full"
            reverse
          />
        </li>
      ))}
    </ul>
  );
};
