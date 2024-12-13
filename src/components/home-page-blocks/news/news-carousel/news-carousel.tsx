import { useCallback, useRef, useState } from "react";

import { FilteredNewsItemT } from "../../../../utils/types";
import { ButtonsBlock } from "../buttons-block";
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
      ) : filteredNews ? (
        <ul className={styles.carousel__wrapper} ref={ref}>
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
