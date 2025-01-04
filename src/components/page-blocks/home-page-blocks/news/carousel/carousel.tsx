import { NewsItem } from "../news-item";
import { FilteredNewsItemT } from "@utils/types";

export type CarouselPropsT = {
  listRef: React.RefObject<HTMLUListElement>;
  filteredNews: FilteredNewsItemT[];
  wrapperStyles: string;
};

export const Carousel = ({
  listRef,
  filteredNews,
  wrapperStyles,
}: CarouselPropsT) => {
  return (
    <ul className={wrapperStyles} ref={listRef}>
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
  );
};
