import styles from "./news.module.scss";
import { NewsCarousel } from "./news-carousel";

export const News = () => {
  return (
    <section className={styles.news__wrapper}>
      <h2 className={styles.news__heading}>
        Current news from the world of finance
      </h2>
      <p className={styles.news__text}>
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </p>
      <NewsCarousel />
    </section>
  );
};
