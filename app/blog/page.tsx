import React from "react";
import HighLightArticle from "../_components/blog/HighLightArticle";
import SubscribeToNewsletter from "../_components/blog/SubscribeToNewsletter";
import FeaturedArticles from "../_components/blog/FeaturedArticles";
import { FeaturedArticlesProps } from "@/types/types";
import { fetchDataFormStrapi } from "@/utils/strapi.utils";

const featureArticle: FeaturedArticlesProps = {
  headline: "Our featured articles",
  featuredArticles: [
    {
      image: "/assets/jeremy-bishop-_CFv3bntQlQ-unsplash.png",
      date: "Monday, June 05, 2023",
      title:
        "Test is flex grow properly surfboard shaping and design behind the scenes of crafting the perfect board",
    },
    {
      image: "/assets/jeremy-bishop-_CFv3bntQlQ-unsplash.png",
      date: "Monday, June 05, 2023",
      title: "Surfing lessons in Corralejo",
      price: "Prices starting at 580€",
    },
    {
      image: "/assets/jeremy-bishop-_CFv3bntQlQ-unsplash.png",
      date: "Monday, June 05, 2023",
      title: "Surfing lessons in Corralejo",
      price: "Prices starting at 580€",
    },
    {
      image: "/assets/jeremy-bishop-_CFv3bntQlQ-unsplash.png",
      date: "Monday, June 05, 2023",
      title: "Surfing lessons in Corralejo",
      price: "Prices starting at 580€",
    },
  ],
};

const Blog = async () => {
  const response = await fetchDataFormStrapi(
    "/api/blog-articles?populate=deep"
  );
  console.log(response);

  return (
    <main className="container blog-page">
      <HighLightArticle />
      <SubscribeToNewsletter />
      <FeaturedArticles
        headline={featureArticle.headline}
        featuredArticles={featureArticle?.featuredArticles}
        // handleSeeMoreBtnClick={() => {}}
      />
    </main>
  );
};

export default Blog;
