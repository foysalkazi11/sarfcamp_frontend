// blogs

export type FeaturedArticlesCardProps = {
  headline?: string;
  excerpt?: string;
  slug?: string;
  featuredImage?: { url: string; hash: string };
  isFeaturedArticle?: boolean;
  date?: string;
  price?: string;
  href?:string
};

export type FeaturedArticlesProps = {
  heading?: string;
  numberOfItemsToShowFirstTime?: number;
  articles?: FeaturedArticlesCardProps[];
};

export type TSingleEventData = {
      id: number,
      name: string,
      description: string,
      startDate: string,
      endDate: string,
      SinglePrice: number,
      sharedPrice: number,
      createdAt: Date,
      updatedAt: Date,
      publishedAt: string,
      image: {
        url: string,
        hash: string
      }
    }
