import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { ArrowLeft, ArrowRight } from "@components/ui/icons";
import { Button } from "@components/ui/button";
import styles from "./buttons-block.module.scss";

export const ButtonsBlock = ({
  listRef,
}: {
  listRef: React.RefObject<HTMLUListElement>;
}) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Отслеживание скролла
  const checkScrollPosition = useCallback(() => {
    if (listRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  }, [listRef]);

  const debounceCheckScrollPosition = debounce(checkScrollPosition, 50);

  const scrollContainerBy = (scrollStep: number) => {
    listRef.current?.scrollBy({ left: scrollStep, behavior: "smooth" });
  };

  // Навешивание слушателя скролла на слайдер
  useEffect(() => {
    checkScrollPosition();
    const current = listRef.current;
    current?.addEventListener("scroll", debounceCheckScrollPosition);

    return () => {
      current?.removeEventListener("scroll", debounceCheckScrollPosition);
      debounceCheckScrollPosition.cancel();
    };
  }, [checkScrollPosition, debounceCheckScrollPosition, listRef]);

  return (
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
  );
};
