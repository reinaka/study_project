import { useCallback, useState } from "react";
import styles from "./accordion.module.scss";

export type AccordionItemT = {
  title: string;
  content: string;
  id: string;
};

export const Accordion = ({
  heading,
  list,
}: {
  heading?: string;
  list: AccordionItemT[];
}) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleOpenItem = useCallback(
    (ind: number) => () =>
      ind === openItem ? setOpenItem(null) : setOpenItem(ind),
    [openItem],
  );

  return (
    <section>
      {heading && <h2 className={styles.accordion__heading}>{heading}</h2>}
      <ul className={styles.accordion__wrapper}>
        {list.map((item, ind) => (
          <li key={item.id} className={styles.accordion__item}>
            <div
              className={`${styles.accordion__title} ${ind === openItem && styles["accordion__title--open"]}`}
              onClick={handleOpenItem(ind)}
            >
              {item.title}
            </div>
            <div
              className={`${styles.accordion__content} ${ind === openItem && styles["accordion__content--open"]}`}
            >
              {item.content}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
