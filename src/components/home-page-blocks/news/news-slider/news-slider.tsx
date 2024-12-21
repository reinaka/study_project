import { useRef } from "react";
import { FilteredNewsItemT } from "@utils/types";
import { NewsItem, NewsItemPlaceholder } from "../news-item";
import { ButtonsBlock } from "../buttons-block";
import styles from "./news-slider.module.scss";

export type NewsSliderPropsT = {
  filteredNews: FilteredNewsItemT[] | null;
  isLoading: boolean;
};

export const NewsSlider = ({ filteredNews, isLoading }: NewsSliderPropsT) => {
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <div className={styles.newsCarousel__wrapper}>
      {isLoading ? (
        <ul className={styles.carousel__wrapper}>
          {[1, 2, 3, 4].map(index => (
            <li key={index}>
              <NewsItemPlaceholder />
            </li>
          ))}
        </ul>
      ) : filteredNews ? (
        <>
          <ul className={styles.carousel__wrapper} ref={listRef}>
            {filteredNews.map(item => (
              <li key={item.url}>
                <NewsItem
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  urlToImage={item.urlToImage}
                  author={item.author || "unknown author"}
                />
              </li>
            ))}
          </ul>
          <ButtonsBlock listRef={listRef} />
        </>
      ) : (
        <div className={styles["carousel__wrapper--placeholder"]}>
          <p>Failed to load latest news</p>
        </div>
      )}
    </div>
  );
};
