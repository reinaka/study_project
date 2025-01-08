import { FilteredNewsItemT, NewsItemT } from "@utils/types";
import { checkArticle } from "./checkNewsItem";

export const getFilteredArticles = async (
  articles: NewsItemT[] | [],
  limit: number,
) => {
  async function filterArticles(
    resultArr: FilteredNewsItemT[],
    start: number,
    end: number | undefined,
  ) {
    if (end != undefined && articles.length <= end) end = undefined;
    const articlesSlice = articles.slice(start, end);
    const promises = articlesSlice.map(article => checkArticle(article));
    const result = (await Promise.allSettled(promises)) as {
      status: "fulfilled" | "rejected";
      value: FilteredNewsItemT;
    }[];
    const filteredArticles = result
      .filter(article => article.status === "fulfilled" && article.value)
      .map(article => article.value);
    if (filteredArticles.length)
      resultArr = [...resultArr, ...filteredArticles];
    if (resultArr.length < limit && end != undefined) {
      start = end;
      end += limit - resultArr.length;
      return filterArticles(resultArr, start, end);
    } else return resultArr;
  }

  const filteredArticlesResult = await filterArticles([], 0, limit + 1);
  return filteredArticlesResult;
};
