import Image from "next/image";
import HeroSection from "./_components/HeroSection";

export default function Home() {
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
    </main>
  );
}
