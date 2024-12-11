export type NewsArticleT = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type FilteredNewsArticleT = Omit<NewsArticleT, "url" | "urlToInnage"> & {
  url: string;
  urlToImage: string;
};
