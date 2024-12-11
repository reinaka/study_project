import { NewsArticleT } from "../types";

export const checkNewsArticle = (article: NewsArticleT) => {
  if (
    !article.title ||
    !article.description ||
    !article.url ||
    !article.urlToImage
  )
    return false;
  return true;
};
