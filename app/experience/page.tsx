import React from "react";
import HeroSection from "../_components/HeroSection";
import InfoBlock from "../_components/InfoBlock";
import {
  arrangeInfoBlockData,
  fetchDataFormStrapi,
} from "@/utils/strapi.utils";

const Experience = async () => {
  const response = await fetchDataFormStrapi(
    "/api/info-block-experience?populate=deep"
  );
  const arrangeData = arrangeInfoBlockData(response);
  const headLines = (
    <>
      <h1>discover.</h1>
      <h1>your.</h1>
      <h1>spirit.</h1>
    </>
  );

  return (
    <main>
      <HeroSection
        imgSrc="/assets/pexels-rachel-claire-4825701 1.png"
        headLines={headLines}
        theme="orange"
      />
      {arrangeData?.map((infoBlock) => {
        const { id, image, headline, description, showImageRight } = infoBlock;
        return (
          <InfoBlock
            key={id}
            imgSrc={image?.url}
            headLines={headline}
            theme={infoBlock?.button?.color}
            description={description}
            reverse={showImageRight}
            button={infoBlock?.button}
          />
        );
      })}
    </main>
  );
};

export default Experience;

export const revalidate = 300;
