/* eslint-disable @next/next/no-img-element */
"use client";
import {
  FeaturedArticlesCardProps,
  FeaturedArticlesProps,
} from "@/types/types";
import React, { useState } from "react";
import Button from "../Button";
import Link from "next/link";

const FeaturedArticles = ({
  articles = [],
  heading = "",
  numberOfItemsToShowFirstTime = 3,
}: FeaturedArticlesProps) => {
  const [itemNumber, setItemNumber] = useState(numberOfItemsToShowFirstTime);

  const handleSeeMoreBtnClick = () => {
    if (itemNumber + 3 > articles.length) {
      return setItemNumber(articles.length);
    } else {
      return setItemNumber((pre) => pre + 3);
    }
  };
  return (
    <section className="featuredArticle">
      <h3 className="featuredArticle__headline">{heading}</h3>
      <div className="featuredArticle__cardsContainer">
        {articles?.slice(0, itemNumber)?.map((article, index) => {
          return <FeaturedArticlesCard key={index} {...article} />;
        })}
      </div>
      {articles?.length > itemNumber && (
        <div className="featuredArticle__button">
          <Button onClick={handleSeeMoreBtnClick} text="See more" />
        </div>
      )}
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
  href=""
}: FeaturedArticlesCardProps) => {
  return (
    <Link href={href ||`/blog/${slug}`}>
      <div className="featuredArticle__card">
        <img
          className="featuredArticle__image"
          src={featuredImage?.url}
          alt="img"
        />

        <div className="featuredArticle__info">
          <h5 className="featuredArticle__title" >{headline}</h5>
          <div >
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
    </Link>
  );
};

export default FeaturedArticles;
