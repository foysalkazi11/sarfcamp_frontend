import ArticleContent from "@/app/_components/singleArticle/ArticleContent";
import ArticleOverview from "@/app/_components/singleArticle/ArticleOverview";
import Headline from "@/app/_components/singleArticle/Headline";
import SingleArticleIntro from "@/app/_components/singleArticle/SingleArticleIntro";
import {
  arrangeBlogData,
  fetchDataFormStrapi,
  formatDate,
} from "@/utils/strapi.utils";
import React from "react";

const SingleArticle = async ({ params }: { params: { article: string } }) => {
  const rawData = await fetchDataFormStrapi("/api/blog-articles?populate=deep");
  const arrangeData = await arrangeBlogData(rawData);
  const highLightArticle: any = arrangeData?.find(
    (article: any) => article.slug === params?.article
  );
  const headingLinks = highLightArticle?.articleContent?.filter(
    (heading: any) => heading?.__component === "blog-article.headline"
  );
  console.log(highLightArticle);

  return (
    <main>
      <SingleArticleIntro
        headLines={highLightArticle?.headline}
        author={highLightArticle?.author}
        date={formatDate(highLightArticle?.publishedAt)}
        imgSrc={highLightArticle?.featuredImage}
      />
      <section className="article-content">
        <Headline headline="In this blog" />
        <ArticleOverview
          excerpt={highLightArticle?.excerpt}
          headingLinks={headingLinks}
        />

        {highLightArticle?.articleContent?.map((article: any) => (
          <ArticleContent key={article?.id} component={article} />
        ))}
      </section>
    </main>
  );
};

export default SingleArticle;

export async function generateStaticParams() {
  const rawData = await fetchDataFormStrapi("/api/blog-articles");

  return rawData.map((post: any) => ({
    article: post?.attributes?.slug,
  }));
}
