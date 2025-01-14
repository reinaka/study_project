import { FilteredNewsItemT, NewsItemT } from "@utils/types";
import { checkArticle } from "./checkNewsItem";

export const getFilteredArticles = async (
  articles: NewsItemT[] | [],
  limit: number,
) => {
  // рекурсия:
  // проверяем сначала количество статей, равное лимиту (необходимому количеству),
  // потом дополнительно проверяем еще статьи, если не все прошли проверку на предыдущем этапе
  async function filterArticles(
    resultArr: FilteredNewsItemT[],
    start: number,
    end: number | undefined,
  ) {
    // проверяем, достаточно ли еще статей для проверки:
    // если нет, то проверяем столько, сколько есть, и возвращаем результат
    // если да и лимит не заполнен, то вызываем рекурсивную функцию снова
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

  // результат:
  // получаем либо количество, равное лимиту, либо меньшее количество (если валидных статей было недостаточно)
  const filteredArticlesResult = await filterArticles([], 0, limit + 1);
  return filteredArticlesResult;
};
