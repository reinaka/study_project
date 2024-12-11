import { useCallback, useEffect, useRef, useState } from "react";

import { NEWS_KEY } from "../../../../utils/const";
import { checkNewsArticle, getData } from "../../../../utils/functions";
import { NewsArticleT } from "../../../../utils/types";
import { ButtonsBlock } from "../buttons-block/buttons-block";
import { NewsItem } from "../news-item";
import { NewsItemPlaceholder } from "../news-item/news-item-placeholder";
import styles from "./news-carousel.module.scss";

export const NewsCarousel = () => {
  const [articles, setArticles] = useState<NewsArticleT[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLeftButtonActive, setIsLeftButtonActive] = useState(false);
  const [isRightButtonActive, setIsRightButtonActive] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  //Хендлер кликов на кнопки
  const buttonClickHandler = useCallback((scrollTo: "left" | "right") => {
    if (ref !== null && ref.current) {
      if (scrollTo === "left") {
        if (Math.ceil(ref.current!.scrollLeft) > 0) {
          return () => {
            ref.current!.scrollLeft -= 500;
            checkButtons();
          };
        }
      } else if (scrollTo === "right") {
        if (
          ref.current!.scrollWidth - ref.current!.clientWidth >
          ref.current!.scrollLeft
        ) {
          return () => {
            ref.current!.scrollLeft += 500;
            checkButtons();
          };
        }
      }
    }
  }, []);

  //Проверка активности кнопок
  const checkButtons = () => {
    if (ref.current!.scrollLeft > 0) {
      setIsLeftButtonActive(true);
    } else setIsLeftButtonActive(false);
    if (
      ref.current!.scrollWidth - ref.current!.clientWidth >
      ref.current!.scrollLeft
    ) {
      setIsRightButtonActive(true);
    } else setIsRightButtonActive(false);
  };

  const getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_KEY}&pageSize=100`;
    try {
      setIsLoading(true);
      const data = await getData(url, "Unable to load articles");
      const filteredArticles = data.articles.filter(article =>
        checkNewsArticle(article),
      );
      setArticles(filteredArticles);
      setIsRightButtonActive(true);
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
      {isLoading ? (
        <ul className={styles.carousel__wrapper} ref={ref}>
          {[1, 2, 3, 4].map(index => (
            <li key={index}>
              <NewsItemPlaceholder />
            </li>
          ))}
        </ul>
      ) : articles ? (
        <ul className={styles.carousel__wrapper} ref={ref}>
          {articles.map(item => (
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
      ) : (
        <div className={styles["carousel__wrapper--placeholder"]}>
          <p>Failed to load latest news</p>
        </div>
      )}
      <ButtonsBlock
        onClickHandler={buttonClickHandler}
        leftButtonActive={isLeftButtonActive}
        rightButtonActive={isRightButtonActive}
      />
    </div>
  );
};
