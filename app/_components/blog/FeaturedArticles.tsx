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
      <h3 className="featuredArticle__headline">{headline}</h3>
      <div className="featuredArticle__cardsContainer">
        {featuredArticles?.map((article, index) => {
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
  image,
  date,
  price,
  title,
}: FeaturedArticlesCardProps) => {
  return (
    <div className="featuredArticle__card">
      <img className="featuredArticle__image" src={image} alt="img" />

      <div className="featuredArticle__info">
        <h5 className="featuredArticle__title">{title}</h5>
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
