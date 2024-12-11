import classNames from "classnames/bind";

import styles from "./news-item.module.scss";

export const NewsItemPlaceholder = () => {
  const cx = classNames.bind(styles);
  const imageStyles = cx({
    image__wrapper: true,
    placeholder: true,
  });

  const headingStyles = cx({
    newsItem__heading: true,
    placeholder: true,
  });

  const textStyles = cx({
    newsItem__text: true,
    placeholder: true,
  });

  return (
    <div className={styles.newsItem__wrapper}>
      <div className={imageStyles}></div>
      <h2 className={headingStyles}></h2>
      <p className={textStyles}></p>
    </div>
  );
};
