import debounce from "lodash.debounce";
import { useCallback,useEffect, useRef, useState } from "react";

import { FilteredNewsItemT } from "../../../../utils/types";
import { Button } from "../../../button";
import { ArrowLeft, ArrowRight } from "../../../icons";
import { NewsItem } from "../news-item";
import { NewsItemPlaceholder } from "../news-item";
import styles from "./news-carousel.module.scss";

export type NewsCarouselPropsT = {
  filteredNews: FilteredNewsItemT[] | null;
  isLoading: boolean;
};

export const NewsCarousel = ({
  filteredNews,
  isLoading,
}: NewsCarouselPropsT) => {
  
  const listRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkForScrollPosition = useCallback(() => {
    if (listRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  }, []);

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 50);

  const scrollContainerBy = (scrollStep: number) => {
    listRef.current?.scrollBy({ left: scrollStep, behavior: "smooth" })};

  useEffect(() => {
    checkForScrollPosition();
    const current = listRef.current;
    current?.addEventListener("scroll", debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener("scroll", debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, [checkForScrollPosition, debounceCheckForScrollPosition]);

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
        <div className={styles.carousel__wrapper}>
          <ul className={styles.carousel__list} ref={listRef}>
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
        </div>
      ) : (
        <div className={styles["carousel__wrapper--placeholder"]}>
          <p>Failed to load latest news</p>
        </div>
      )}
      <div className={styles.buttons__wrapper}>
        <Button
          additionalStyles={styles.carousel__button}
          radius="rounded"
          disabled={!canScrollLeft}
          onClick={() => scrollContainerBy(-500)}
        >
          <ArrowLeft />
        </Button>
        <Button
          additionalStyles={styles.carousel__button}
          radius="rounded"
          disabled={!canScrollRight}
          onClick={() => scrollContainerBy(500)}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};
