/* eslint-disable @next/next/no-img-element */
import React from "react";

type SingleArticleIntroProps = {
  imgSrc?: {
    url: string;
    hash: string;
  };
  headLines?: React.ReactNode | string;
  date?: string;
  author?: string;
};

const SingleArticleIntro = ({
  headLines,
  imgSrc,
  author,
  date,
}: SingleArticleIntroProps) => {
  return (
    <section className="singleArticleIntro">
      <div className="singleArticleIntro__background">
        <img src={imgSrc?.url} alt="img" />
      </div>
      <div className={`singleArticleIntro__headline`}>
        <h3>{headLines}</h3>
      </div>
      <div>
        <p className={`copy-small bold`}>{date}</p>
        {author && <p className="copy-small">{author}</p>}
      </div>
    </section>
  );
};

export default SingleArticleIntro;
