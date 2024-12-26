import styles from "./news-item.module.scss";

export const NewsItemPlaceholder = () => {
  return (
    <div className={styles.newsItem__wrapper}>
      <div className={`${styles.image__wrapper} ${styles.placeholder}`} />
      <h2 className={`${styles.newsItem__heading} ${styles.placeholder}`} />
      <p className={`${styles.newsItem__text} ${styles.placeholder}`} />
    </div>
  );
};
