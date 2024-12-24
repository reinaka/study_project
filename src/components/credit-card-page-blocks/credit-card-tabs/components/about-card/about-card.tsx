import { Cash, Calendar, Clock, Bag, Card } from "@ui/icons";
import { InfoBlock } from "@ui/info-block/info-block";
import styles from "./about-card.module.scss";

const ABOUT_CARD_ITEMS = [
  {
    heading: "Up to 50 000 ₽",
    text: "Cash and transfers without commission and percent",
    image: <Cash />,
  },
  {
    heading: "Up to 160 days",
    text: "Without percent on the loan",
    image: <Calendar />,
  },
  {
    heading: "Free delivery",
    text: "We will deliver your card by courier at a convenient place and time for you",
    image: <Clock />,
  },
  {
    heading: "Up to 12 months",
    text: "No percent. For equipment, clothes and other purchases in installments",
    image: <Bag />,
  },
  {
    heading: "Convenient deposit and withdrawal",
    text: "At any ATM. Top up your credit card for free with cash or transfer from other cards",
    image: <Card />,
  },
];

export const AboutCard = () => {
  return (
    <ul className={styles.aboutCard__wrapper}>
      {ABOUT_CARD_ITEMS.map(item => (
        <li key={item.heading} className={styles.aboutCard__item}>
          <InfoBlock
            heading={item.heading}
            text={item.text}
            icon={item.image}
            type="full"
          />
        </li>
      ))}
    </ul>
  );
};
