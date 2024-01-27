// blogs

export type FeaturedArticlesCardProps = {
  headline?: string;
  excerpt?: string;
  slug?: string;
  featuredImage?: { url: string; hash: string };
  isFeaturedArticle?: boolean;
  date?: string;
  price?: string;
};

export type FeaturedArticlesProps = {
  heading?: string;
  numberOfItemsToShowFirstTime?: number;
  articles?: FeaturedArticlesCardProps[];
};
