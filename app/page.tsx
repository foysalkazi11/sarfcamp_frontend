import {
  arrangeInfoBlockData,
  fetchDataFormStrapi,
} from "@/utils/strapi.utils";
import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";

export default async function Home() {
  const response = await fetchDataFormStrapi(
    "/api/info-block-landing?populate=deep"
  );
  const arrangeData = arrangeInfoBlockData(response);
  const headLines = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  return (
    <main>
      <HeroSection
        imgSrc="/assets/jeremy-bishop-_CFv3bntQlQ-unsplash.png"
        headLines={headLines}
        theme="turquoise"
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
}
