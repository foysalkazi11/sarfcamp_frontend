/* eslint-disable @next/next/no-img-element */
import React from "react";

type InfoBlockProps = {
  imgSrc?: string;
  headLines?: React.ReactNode | string;
  description?: React.ReactNode | string;
  theme?: "turquoise" | "black" | "orange";
  reverse?: boolean;
};

const InfoBlock = ({
  description = "",
  headLines = "",
  imgSrc = "",
  theme = "turquoise",
  reverse = false,
}: InfoBlockProps) => {
  return (
    <section className={`infoBlock  ${reverse ? "infoBlock__reverse" : ""}`}>
      <img className={`infoBlock__img`} src={imgSrc} alt="infoImg" />
      <div className={`infoBlock__info`}>
        <h2 className={`infoBlock__infoHeading`}>{headLines}</h2>
        <div className={`infoBlock__infoDescription copy`}>{description}</div>
        <button className={`btn btn--small btn--${theme}`}>BOOK NOW</button>
      </div>
    </section>
  );
};

export default InfoBlock;
