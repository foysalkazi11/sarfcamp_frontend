// blogs

export type FeaturedArticlesCardProps = {
  image?: string;
  title?: string;
  date?: string;
  price?: string;
};

export type FeaturedArticlesProps = {
  headline?: string;
  handleSeeMoreBtnClick?: () => void;
  featuredArticles?: FeaturedArticlesCardProps[];
};
