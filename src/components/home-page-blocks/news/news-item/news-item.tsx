import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { NewsArticleT } from "../../../../utils/types";
import styles from "./news-item.module.scss";

export type NewsItemPropsT = Pick<
  NewsArticleT,
  "title" | "author" | "description"
> & {
  url: string;
  urlToImage: string;
  placeholder?: boolean;
};

export const NewsItem = ({
  title,
  description,
  url,
  urlToImage,
  author,
  placeholder,
}: NewsItemPropsT) => {
  const cx = classNames.bind(styles);
  const imageStyles = cx({
    image__wrapper: true,
    placeholder: placeholder,
  });

  const headingStyles = cx({
    newsItem__heading: true,
    placeholder: placeholder,
  });

  const textStyles = cx({
    newsItem__text: true,
    placeholder: placeholder,
  });

  return (
    <Link to={url} target="_blank" rel="noreferrer">
      <div className={styles.newsItem__wrapper}>
        <div className={imageStyles}>
          {!placeholder && (
            <img src={urlToImage} alt={`Article published by ${author}`} />
          )}
        </div>
        <h2 className={headingStyles}>{!placeholder && title}</h2>
        <p className={textStyles}>{!placeholder && description}</p>
      </div>
    </Link>
  );
};
