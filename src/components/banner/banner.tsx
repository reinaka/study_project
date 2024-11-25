import { Button } from "../button/button";
import { BannerCard } from "./banner-card/banner-card";
import styles from "./banner.module.scss";

export const Banner = () => {
  return (
    <div role="banner" className={styles.banner__wrapper}>
      <div className={styles.banner__applyBlock}>
        <h1 className={styles.banner__heading}>
          Choose the design you like and apply for card right now
        </h1>
        <Button radius={16}>Choose the card</Button>
      </div>
      <div className={styles.cardWrapper}>
        <BannerCard card="/banner-cards/card1.jpg" />
        <BannerCard card="/banner-cards/card2.jpg" />
        <BannerCard card="/banner-cards/card3.jpg" />
        <BannerCard card="/banner-cards/card4.jpg" />
      </div>
    </div>
  );
};
