import React from "react";
import HighLightArticle from "../_components/blog/HighLightArticle";
import SubscribeToNewsletter from "../_components/blog/SubscribeToNewsletter";
import FeaturedArticles from "../_components/blog/FeaturedArticles";
import { FeaturedArticlesProps } from "@/types/types";
import { arrangeBlogData, fetchDataFormStrapi } from "@/utils/strapi.utils";

// const featureArticle: FeaturedArticlesProps = {
//   heading: "Our featured articles",
//   articles: [
//     {
//       image: "/assets/jeremy-bishop-_CFv3bntQlQ-unsplash.png",
//       date: "Monday, June 05, 2023",
//       title:
//         "Test is flex grow properly surfboard shaping and design behind the scenes of crafting the perfect board",
//     },
//     {
//       image: "/assets/jeremy-bishop-_CFv3bntQlQ-unsplash.png",
//       date: "Monday, June 05, 2023",
//       title: "Surfing lessons in Corralejo",
//       price: "Prices starting at 580€",
//     },
//     {
//       image: "/assets/jeremy-bishop-_CFv3bntQlQ-unsplash.png",
//       date: "Monday, June 05, 2023",
//       title: "Surfing lessons in Corralejo",
//       price: "Prices starting at 580€",
//     },
//     {
//       image: "/assets/jeremy-bishop-_CFv3bntQlQ-unsplash.png",
//       date: "Monday, June 05, 2023",
//       title: "Surfing lessons in Corralejo",
//       price: "Prices starting at 580€",
//     },
//   ],
// };

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
        // handleSeeMoreBtnClick={() => {}}
      />
    </main>
  );
};

export default Blog;
