import { Offer } from "./offer";
import { OfferT } from "./offer.type";
import styles from "./offers.module.scss";

export const Offers = ({ offersArr }: { offersArr: OfferT[] }) => {
  return (
    <ul className={styles.offers__wrapper}>
      {offersArr.map((offer, index) => (
        <li key={index}>
          <Offer offer={offer} />
        </li>
      ))}
    </ul>
  );
};
