export type NewsItemT = {
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

export type FilteredNewsItemT = {
  url: string;
  urlToImage: string;
  title: string;
  author: string | null;
  description: string;
};
