import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { NewsItemPlaceholder } from "../news-item";
import { ButtonsBlock } from "../buttons-block";
import { Notification } from "@components/ui";
import { Carousel } from "../carousel";
import { getFilteredArticles } from "@utils/functions";
import { UPDATE_TIME, NEWS_KEY } from "@utils/const/const";
import { FilteredNewsItemT } from "@utils/types";
import styles from "./news-slider.module.scss";

export const NewsSlider = ({ width }: { width: number }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [filteredNews, setFilteredNews] = useState<FilteredNewsItemT[] | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  // Функция для получения списка новостей
  const getNews = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_KEY}&pageSize=100`,
      );
      const filteredArticles = await getFilteredArticles(
        response.data.articles,
        20,
      );
      setFilteredNews(filteredArticles);
    } catch {
      setFilteredNews(null);
    } finally {
      setIsLoading(false);
    }
  };

  // количество слайдов, которые будут отображаться как плейсхолдер, пока загружаются новости
  const slides = Array.from({ length: Math.ceil(width / 380) }, (_, i) => i);

  // для получения списка новостей каждые 15 минут
  useEffect(() => {
    void getNews();
    const intervalId = setInterval(getNews, UPDATE_TIME);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.newsCarousel__wrapper}>
      {isLoading ? (
        <ul className={styles.carousel__wrapper}>
          {slides.map(index => (
            <li key={index}>
              <NewsItemPlaceholder />
            </li>
          ))}
        </ul>
      ) : filteredNews?.length ? (
        <>
          <Carousel
            listRef={listRef}
            filteredNews={filteredNews}
            wrapperStyles={styles.carousel__wrapper}
          />
          <ButtonsBlock listRef={listRef} />
        </>
      ) : (
        <div className={styles["carousel__wrapper--placeholder"]}>
          <Notification>Failed to load latest news</Notification>
        </div>
      )}
    </div>
  );
};
