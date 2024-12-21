import { Button } from "@ui/button";
import { CreditCard } from "@ui/credit-card";
import styles from "./banner-home.module.scss";

const bannerHomeCards = [
  {
    title: "credit card 1",
    src: "/credit-cards/card1.jpg",
  },
  {
    title: "credit card 2",
    src: "/credit-cards/card2.jpg",
  },
  {
    title: "credit card 3",
    src: "/credit-cards/card3.jpg",
  },
  {
    title: "credit card 4",
    src: "/credit-cards/card4.jpg",
  },
];

export const BannerHome = () => {
  return (
    <section role="banner" className={styles.banner__wrapper}>
      <div className={styles.banner__applyBlock}>
        <h1 className={styles.banner__heading}>
          Choose the design you like and apply for card right now
        </h1>
        <Button radius={16}>Choose the card</Button>
      </div>
      <ul className={styles.card__wrapper}>
        {bannerHomeCards.map(card => (
          <li key={card.src} className={styles.card__item}>
            <CreditCard card={card} additionalStyles={styles.card}/>
          </li>
        ))}
      </ul>
    </section>
  );
};
