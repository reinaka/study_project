import { Link } from "react-router-dom";

import { NewsArticleT } from "../../../../utils/types";
import styles from "./news-item.module.scss";

export type NewsItemPropsT = Pick<
  NewsArticleT,
  "title" | "author" | "description"
> & {
  url: string;
  urlToImage: string;
};

export const NewsItem = ({
  title,
  description,
  url,
  urlToImage,
  author,
}: NewsItemPropsT) => {
  return (
    <Link to={url} target="_blank" rel="noreferrer">
      <div className={styles.newsItem__wrapper}>
        <div className={styles.image__wrapper}>
          <img src={urlToImage} alt={`Article published by ${author}`} />
        </div>
        <h2 className={styles.newsItem__heading}>{title}</h2>
        <p className={styles.newsItem__text}>{description}</p>
      </div>
    </Link>
  );
};
