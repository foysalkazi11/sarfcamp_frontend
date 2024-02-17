/* eslint-disable @next/next/no-img-element */
import { arrangeBlogData, fetchDataFormStrapi } from "@/utils/strapi.utils";
import Link from "next/link";
import React from "react";

const TheBlog = async () => {
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
    )
    ?.slice(0, 3);

  const articlesToDisplay = [highLightArticle, ...featuredArticle];

  return (
    <section className="theBlog">
      <h2 className="theBlog__heading">the blog.</h2>
      <div className="theBlog__content">
        {articlesToDisplay?.map((article: any, index: number) => {
          let cardSize: CartSizeType = "default";
          if (index === 0) cardSize = "large";
          if (index === 1) cardSize = "small";

          return (
            <TheBlocCard {...article} cardSize={cardSize} key={article?.id} />
          );
        })}
      </div>
    </section>
  );
};

type CartSizeType = "default" | "large" | "small";

type TheBlocCardProps = {
  headline: string;
  slug: string;
  date: string;
  featuredImage: {
    url: string;
    hash: string;
  };
  cardSize?: CartSizeType;
};

const TheBlocCard = ({
  date,
  featuredImage,
  headline,
  slug,
  cardSize,
}: TheBlocCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`theBlog__card theBlog__card--${cardSize}`}
    >
      <div className="theBlog__card__image">
        <img src={featuredImage?.url} alt="" />
      </div>
      <h5 className="theBlog__card__title">{headline}</h5>
      <p className="copy-small theBlog__card__date">{date}</p>
    </Link>
  );
};

export default TheBlog;
