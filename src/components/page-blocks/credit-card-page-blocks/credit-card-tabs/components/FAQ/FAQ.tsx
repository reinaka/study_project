import { Accordion } from "@components/ui/accordion";
import { FAQ_ITEMS_1, FAQ_ITEMS_2 } from "./accordion.const";
import styles from "./FAQ.module.scss";

export const FAQ = () => {
  return (
    <article className={styles.FAQ__wrapper}>
      <Accordion list={FAQ_ITEMS_1} heading="Issuing and receiving a card" />
      <Accordion list={FAQ_ITEMS_2} heading="Using a credit card" />
    </article>
  );
};
