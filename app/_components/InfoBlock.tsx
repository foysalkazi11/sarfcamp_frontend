/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

type InfoBlockProps = {
  imgSrc?: string;
  headLines?: React.ReactNode | string;
  description?: string;
  theme?: "turquoise" | "black" | "orange";
  reverse?: boolean;
  button?: null | {
    id: number;
    text: string;
    color: "turquoise" | "black" | "orange";
    slug: string;
  };
};

const InfoBlock = ({
  description = "",
  headLines = "",
  imgSrc = "",
  theme = "turquoise",
  reverse = false,
  button = null,
}: InfoBlockProps) => {
  return (
    <section className={`infoBlock  ${reverse ? "infoBlock__reverse" : ""}`}>
      <img className={`infoBlock__img`} src={imgSrc} alt="infoImg" />
      <div className={`infoBlock__info`}>
        <h2 className={`infoBlock__infoHeading`}>{headLines}</h2>

        <Markdown className="infoBlock__infoDescription copy">
          {description}
        </Markdown>

        {button && (
          <button className={`btn btn--small btn--${button?.color}`}>
            <Link href={button?.slug}>{button?.text}</Link>
          </button>
        )}
      </div>
    </section>
  );
};

export default InfoBlock;
