import { FilteredNewsItemT, NewsItemT } from "@utils/types";
import { checkArticle } from "./checkNewsItem";

export const getFilteredArticles = async (
  articles: NewsItemT[] | [],
  limit: number,
) => {
  const promises = articles.map(article => checkArticle(article));
  const result = (await Promise.allSettled(promises)) as {
    status: "fulfilled" | "rejected";
    value: FilteredNewsItemT;
  }[];
  const filteredArticles = result
    .filter(article => article.status === "fulfilled" && article.value)
    .slice(0, limit)
    .map(article => article.value);
  return filteredArticles;
};
