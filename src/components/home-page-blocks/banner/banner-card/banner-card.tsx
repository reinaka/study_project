import { BannerCardT } from "../banner";
import styles from "./banner-card.module.scss";

export const BannerCard = ({ card }: { card: BannerCardT }) => {
  return (
    <div className={styles.card}>
      <img src={card.src} alt={card.title} className={styles.card__image} />
    </div>
  );
};
