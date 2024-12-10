import { useCallback, useEffect, useRef, useState } from "react";

import { NEWS_KEY } from "../../../../utils/const";
import { getData } from "../../../../utils/functions";
import { NewsArticleT } from "../../../../utils/types";
import { ButtonsBlock } from "../buttons-block/buttons-block";
import { NewsItem } from "../news-item";
import styles from "./news-carousel.module.scss";

export const NewsCarousel = () => {
  const [articles, setArticles] = useState<NewsArticleT[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  const buttonClickHandler = useCallback((scrollTo: "left" | "right") => {
    if (ref !== null && ref.current) {
      if (scrollTo === "left")
        return () => {
          if (ref.current!.scrollLeft > 0) {
            ref.current!.scrollLeft -= 500;
          }
        };
      else if (scrollTo === "right")
        return () => {
          if (
            ref.current!.scrollWidth - ref.current!.clientWidth >
            ref.current!.scrollLeft
          ) {
            ref.current!.scrollLeft += 500;
          }
        };
    }
  }, []);

  const getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_KEY}&pageSize=100`;
    try {
      setIsLoading(true);
      const data = await getData(url, "Unable to load articles");
      setArticles(data.articles);
    } catch {
      setArticles(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void getNews();
  }, []);

  return (
    <div className={styles.newsCarousel__wrapper}>
      <ul className={styles.carousel__wrapper} ref={ref}>
        {articles &&
          !isLoading &&
          articles.map(item => (
            <li key={item.url}>
              <NewsItem
                title={item.title}
                description={item.description}
                url={item.url}
                urlToImage={item.urlToImage}
                author={item.author}
              />
            </li>
          ))}
      </ul>
      <ButtonsBlock onClickHandler={buttonClickHandler} />
    </div>
  );
};
