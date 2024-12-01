import styles from "./banner-card.module.scss";

export const BannerCard = ({ card }: { card: string }) => {
  return (
    <div className={styles.card}>
      <img src={card} />
    </div>
  );
};
