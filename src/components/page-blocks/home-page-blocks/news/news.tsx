import { useRef, useEffect, useState } from "react";
import { NewsSlider } from "./news-slider";
import styles from "./news.module.scss";

export const News = () => {
  const ref = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(ref?.current?.offsetWidth);

  useEffect(() => {
    if (ref.current !== null) setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <section className={styles.news__wrapper} ref={ref}>
      <h2 className={styles.news__heading}>
        Current news from the world of finance
      </h2>
      <p className={styles.news__text}>
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </p>
      {width && <NewsSlider width={width} />}
    </section>
  );
};
