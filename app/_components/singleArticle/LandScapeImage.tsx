/* eslint-disable @next/next/no-img-element */
import { imageUrlFormat } from "@/utils/strapi.utils";
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
  const imaObj = imageUrlFormat(image?.data?.attributes);
  return (
    <section className="articleComponentLandscapeImage">
      <img src={imaObj?.url} alt="img" />
      {imageCaption && <span className="copy-small">{imageCaption}</span>}
    </section>
  );
};

export default LandscapeImage;
