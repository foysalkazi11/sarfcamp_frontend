import { arrangeBlogData, fetchDataFormStrapi } from "@/utils/strapi.utils";
import React from "react";

const SingleArticle = async ({ params }: { params: { article: string } }) => {
  const rawData = await fetchDataFormStrapi("/api/blog-articles?populate=deep");
  const arrangeData = await arrangeBlogData(rawData);
  const highLightArticle: any = arrangeData?.find(
    (article: any) => article.slug === params?.article
  );
  console.log(highLightArticle);

  return <div>SingleArticle{highLightArticle.headline}</div>;
};

export default SingleArticle;

export async function generateStaticParams() {
  const rawData = await fetchDataFormStrapi("/api/blog-articles");

  return rawData.map((post: any) => ({
    article: post?.attributes?.slug,
  }));
}
