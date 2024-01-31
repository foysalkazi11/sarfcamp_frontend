/* eslint-disable @next/next/no-img-element */

import { FeaturedArticlesCardProps } from "@/types/types";
import Button from "../Button";

const HighLightArticle = ({
  excerpt,
  featuredImage,
  headline,
  slug,
}: FeaturedArticlesCardProps) => {
  return (
    <section className="highLightArticle">
      <div className="highLightArticle__info">
        <h3>{headline}</h3>
        <p className="highLightArticle__description copy">{excerpt}</p>
        <Button text="Read more" href={`/blog/${slug}`} />
      </div>
      <img
        className="highLightArticle__image"
        src={featuredImage?.url || "/assets/pexels-rachel-claire-4825701 1.png"}
        alt="img"
      />
    </section>
  );
};

export default HighLightArticle;
