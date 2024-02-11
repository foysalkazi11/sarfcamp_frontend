/* eslint-disable @next/next/no-img-element */
import { extractImageUrl } from "@/utils/strapi.utils";
import React from "react";

type LandscapeImageProps = {
  id: number;
  __component: string;
  imageCaption: string;
  image: any;
};

const LandscapeImage = ({
  __component,
  id,
  image,
  imageCaption,
}: LandscapeImageProps) => {
  const imaObj = extractImageUrl(image);
  return (
    <section className="articleComponentLandscapeImage">
      <img src={imaObj?.url} alt="img" />
      {imageCaption && <span className="copy-small">{imageCaption}</span>}
    </section>
  );
};

export default LandscapeImage;
