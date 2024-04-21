/* eslint-disable @next/next/no-img-element */
import { imageUrlFormat } from "@/utils/strapi.utils";
import React from "react";
import Markdown from "react-markdown";

type ParagraphWithImageProps = {
  id: number;
  __component: string;
  paragraph: string;
  isLandscape: boolean;
  imageShowRight: boolean;
  imageCaption: string | null;
  image: { [key: string]: any };
};

const ParagraphWithImage = ({
  __component,
  id,
  image,
  imageCaption,
  imageShowRight,
  isLandscape,
  paragraph,
}: ParagraphWithImageProps) => {
  const imaObj = imageUrlFormat(image?.data?.attributes);

  return (
    <section
      className={`paragraphWithImage ${
        imageShowRight ? "" : "paragraphWithImage--imageShowLeft"
      }`}
    >
      <div
        className={`paragraphWithImage__paragraph ${
          isLandscape ? "" : "paragraphWithImage__paragraph--imageProrate"
        } `}
      >
        <Markdown className="copy articleComponentParagraph">
          {paragraph}
        </Markdown>
      </div>
      <div
        className={`paragraphWithImage__image ${
          isLandscape ? "" : "paragraphWithImage__image--imageProrate"
        }`}
      >
        <img src={imaObj?.url} alt="img" />
        {imageCaption && <span className="copy-small">{imageCaption}</span>}
      </div>
    </section>
  );
};

export default ParagraphWithImage;
