import { NewsItemT } from "../types";

const checkTags = (text: string) => {
  if (
    (text.includes("<") && text.includes(">")) ||
    text.includes("\n") ||
    text.includes("\r")
  )
    return true;
  return false;
};

const checkImg = (url: string) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => {
      reject(false);
    };
    img.src = url;
  });

export const checkArticle = async (article: NewsItemT) => {
  if (
    !article.title ||
    !article.description ||
    !article.url ||
    !article.urlToImage
  ) {
    return false;
  } else {
    if (checkTags(article.description)) return false;

    const isImageValid = await checkImg(article.urlToImage);
    if (isImageValid === false) return false;
  }
  return {
    title: article.title,
    description: article.description,
    url: article.url,
    urlToImage: article.urlToImage,
    author: article.author,
  };
};
