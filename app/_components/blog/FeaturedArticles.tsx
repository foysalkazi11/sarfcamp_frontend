/* eslint-disable @next/next/no-img-element */
"use client";
import {
  FeaturedArticlesCardProps,
  FeaturedArticlesProps,
} from "@/types/types";
import React from "react";
import Button from "../Button";

const FeaturedArticles = ({
  handleSeeMoreBtnClick = () => {},
  articles = [],
  heading = "",
}: FeaturedArticlesProps) => {
  return (
    <section className="featuredArticle">
      <h3 className="featuredArticle__headline">{heading}</h3>
      <div className="featuredArticle__cardsContainer">
        {articles?.map((article, index) => {
          return <FeaturedArticlesCard key={index} {...article} />;
        })}
      </div>
      <div className="featuredArticle__button">
        <Button onClick={handleSeeMoreBtnClick} text="See more" />
      </div>
    </section>
  );
};

const FeaturedArticlesCard = ({
  date,
  price,
  excerpt,
  featuredImage,
  headline,
  isFeaturedArticle,
  slug,
}: FeaturedArticlesCardProps) => {
  return (
    <div className="featuredArticle__card">
      <img
        className="featuredArticle__image"
        src={featuredImage?.url}
        alt="img"
      />

      <div className="featuredArticle__info">
        <h5 className="featuredArticle__title">{headline}</h5>
        <div>
          <p
            className={`copy-small featuredArticle__dateAndPrice ${
              price ? "featuredArticle__dateAndPrice--weight700" : ""
            }`}
          >
            {date}
          </p>
          <p className="copy-small featuredArticle__dateAndPrice">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;
