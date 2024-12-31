import { useEffect, useState } from "react";
import { NewsSlider } from "./news-slider";
import { NEWS_KEY } from "@utils/const/const";
import { UPDATE_TIME } from "@utils/const/const";
import { getFilteredArticles } from "@utils/functions";
import { api } from "@utils/functions/api";
import { FilteredNewsItemT } from "@utils/types";
import styles from "./news.module.scss";

export const News = () => {
  const [filteredNews, setFilteredNews] = useState<FilteredNewsItemT[] | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  // Функция для получения списка новостей
  const getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_KEY}&pageSize=100`;
    try {
      setIsLoading(true);
      const response = await api({
        method: "get",
        url: url,
        error_message: "Unable to load articles",
      });
      const filteredArticles = getFilteredArticles(response.data.articles);
      setFilteredNews(filteredArticles);
    } catch {
      setFilteredNews(null);
    } finally {
      setIsLoading(false);
    }
  };

  // для получения списка новостей каждые 15 минут
  useEffect(() => {
    void getNews();
    const intervalId = setInterval(getNews, UPDATE_TIME);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.news__wrapper}>
      <h2 className={styles.news__heading}>
        Current news from the world of finance
      </h2>
      <p className={styles.news__text}>
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </p>
      <NewsSlider filteredNews={filteredNews} isLoading={isLoading} />
    </section>
  );
};
