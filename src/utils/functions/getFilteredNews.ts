import { FilteredNewsItemT, NewsItemT } from "../types";
import { checkArticle } from "./checkNewsItem";

export const getFilteredArticles = (
  articles: NewsItemT[] | [],
): FilteredNewsItemT[] => {
  const limit = 20; // лимит отображаемых статей
  const filteredArticles: FilteredNewsItemT[] = [];
  articles.forEach(async article => {
    const validArticle = await checkArticle(article);
    if (validArticle && filteredArticles.length < limit)
      filteredArticles.push(validArticle);
  });
  return filteredArticles;
};
