import { InfoBlock, INFO_BLOCK_ITEMS } from "./info-block";
import styles from "./get-card.module.scss";

export const GetCard = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>How to get a card</h2>
      <ul className={styles.list}>
        {INFO_BLOCK_ITEMS.map((item, index) => (
          <li key={item.id} className={styles.list__item}>
            <InfoBlock num={++index} text={item.text} />
          </li>
        ))}
      </ul>
    </section>
  );
};
