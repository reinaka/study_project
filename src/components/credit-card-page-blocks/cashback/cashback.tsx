import { InfoBlock } from "@ui/info-block/info-block";
import styles from "./cashback.module.scss";

const CASHBACK_ITEMS = [
  {
    heading: "5%",
    text: "For food delivery, cafes and restaurants",
  },
  {
    heading: "5%",
    text: "In supermarkets with our subscription",
  },
  {
    heading: "2%",
    text: "In clothing stores and children's goods",
  },
  {
    heading: "1%",
    text: "Other purchases and payment of services and fines",
  },
  {
    heading: "up to 3%",
    text: "Shopping in online stores",
  },
  {
    heading: "30%",
    text: "Purchases from our partners",
  },
];

export const Cashback = () => {
  return (
    <ul className={styles.cashback__wrapper}>
      {CASHBACK_ITEMS.map(item => (
        <li key={item.heading} className={styles.cashback__item}>
          <InfoBlock
            heading={item.heading}
            text={item.text}
            type="full"
            reverse
          />
        </li>
      ))}
    </ul>
  );
};
