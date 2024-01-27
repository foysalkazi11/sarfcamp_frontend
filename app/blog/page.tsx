import React from "react";
import HighLightArticle from "../_components/blog/HighLightArticle";
import SubscribeToNewsletter from "../_components/blog/SubscribeToNewsletter";
import FeaturedArticles from "../_components/blog/FeaturedArticles";
import { FeaturedArticlesProps } from "@/types/types";
import { arrangeBlogData, fetchDataFormStrapi } from "@/utils/strapi.utils";

const Blog = async () => {
  const rawData = await fetchDataFormStrapi("/api/blog-articles?populate=deep");
  const arrangeData = await arrangeBlogData(rawData);
  const highLightArticle: any = arrangeData?.find(
    (article: any) => article.isFeaturedArticle
  );
  const featuredArticle: any = arrangeData
    ?.filter((article: any) => !article.isFeaturedArticle)
    ?.sort(
      //@ts-ignore
      (a: any, z: any) => new Date(z.publishedAt) - new Date(a.publishedAt)
    );

  return (
    <main className="container blog-page">
      <HighLightArticle {...highLightArticle} />
      <SubscribeToNewsletter />
      <FeaturedArticles
        heading={"Our featured articles"}
        articles={featuredArticle}
        numberOfItemsToShowFirstTime={6}
      />
    </main>
  );
};

export default Blog;
