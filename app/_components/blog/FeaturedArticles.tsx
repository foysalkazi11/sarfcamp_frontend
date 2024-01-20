/* eslint-disable @next/next/no-img-element */
"use client";
import {
  FeaturedArticlesCardProps,
  FeaturedArticlesProps,
} from "@/types/types";
import React from "react";
import Button from "../Button";

const FeaturedArticles = ({
  headline,
  handleSeeMoreBtnClick = () => {},
  featuredArticles = [],
}: FeaturedArticlesProps) => {
  return (
    <section className="featuredArticle">
      <h4 className="featuredArticle__headline">{headline}</h4>
      <div className="featuredArticle__cards">
        {featuredArticles?.map((article, index) => {
          return <FeaturedArticlesCard key={index} {...article} />;
        })}
      </div>
      <Button onClick={handleSeeMoreBtnClick} text="See more" />
    </section>
  );
};

const FeaturedArticlesCard = ({
  image,
  date,
  price,
  title,
}: FeaturedArticlesCardProps) => {
  return (
    <div>
      <img className="featuredArticle__image" src={image} alt="img" />

      <div className="featuredArticle__info">
        <h5 className="featuredArticle__title">{title}</h5>
        <p
          className={`featuredArticle__dateAndPrice ${
            price ? "featuredArticle__dateAndPrice--weight700" : ""
          }`}
        >
          {date}
        </p>
        <p className="featuredArticle__dateAndPrice">{price}</p>
      </div>
    </div>
  );
};

export default FeaturedArticles;
