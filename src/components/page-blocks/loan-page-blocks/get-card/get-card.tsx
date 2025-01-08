import { InfoBlock } from "./info-block";
import { GET_CARD_ITEMS } from "./get-card-items.const";
import styles from "./get-card.module.scss";

export const GetCard = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>How to get a card</h2>
      <ul className={styles.list}>
        {GET_CARD_ITEMS.map((item, index) => (
          <li key={item.id} className={styles.list__item}>
            <InfoBlock num={++index} text={item.text} />
          </li>
        ))}
      </ul>
    </section>
  );
};
