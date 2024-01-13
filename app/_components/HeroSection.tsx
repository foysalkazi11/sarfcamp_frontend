/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

type HeroSectionProps = {
  imgSrc?: string;
  headLines?: React.ReactNode | string;
  theme?: "turquoise" | "black" | "orange";
};
const HeroSection = ({
  headLines = "headLines",
  imgSrc = "/assets/jeremy-bishop-_CFv3bntQlQ-unsplash.png",
  theme = "turquoise",
}: HeroSectionProps) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <img src={imgSrc} alt="img" />
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>
        {headLines}
      </div>

      <button className={`btn btn--medium btn--${theme}`}>
        <Link href={"/events"}>BOOK NOW</Link>
      </button>

      <img
        className={`hero__logo hero__logo--${theme}`}
        src="/assets/logo.svg"
        alt="logo"
      />
    </section>
  );
};

export default HeroSection;
