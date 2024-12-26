import { InfoBlock } from "@components/ui/info-block/info-block";
import { ABOUT_CARD_ITEMS } from "./about-card-items.const";
import styles from "./about-card.module.scss";

export const AboutCard = () => {
  return (
    <ul className={styles.aboutCard__wrapper}>
      {ABOUT_CARD_ITEMS.map(item => (
        <li key={item.title} className={styles.aboutCard__item}>
          <InfoBlock
            heading={item.title}
            text={item.content}
            icon={item.image}
            type="full"
          />
        </li>
      ))}
    </ul>
  );
};
