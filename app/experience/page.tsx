import React from "react";
import HeroSection from "../_components/HeroSection";
import InfoBlock from "../_components/InfoBlock";

const Experience = () => {
  const headLines = (
    <>
      <h1>discover.</h1>
      <h1>your.</h1>
      <h1>spirit.</h1>
    </>
  );
  const infoDescription = (
    <>
      <p>
        At Sam’s Surfcamp, we invite you to embark on an unforgettable surfing
        adventure. Nestled in the heart of [Location] our surf camp offers an
        exhilarating experience for beginners, intermediate surfers, and
        seasoned wave riders alike.
      </p>

      <p>
        Dive into the world of surfing with our expert instructors who have
        years of experience and a deep passion for the sport. Whether you're a
        first-time surfer looking to catch your first wave or a seasoned pro
        seeking to enhance your skills, our dedicated team is here to guide you
        every step of the way.
      </p>

      <p>
        Immerse yourself in the natural beauty of our surf camp's surroundings.
        Picture yourself waking up to the sound of crashing waves and feeling
        the warm sand beneath your feet. With pristine beaches and a vibrant
        coastal atmosphere, [Location] sets the perfect stage for your surf
        adventure.
      </p>
    </>
  );
  return (
    <main>
      <HeroSection
        imgSrc="/assets/pexels-rachel-claire-4825701 1.png"
        headLines={headLines}
        theme="orange"
      />
      <InfoBlock
        imgSrc="/assets/pexels-roberto-nickson-2631613 1.png"
        headLines={"the experience."}
        theme="orange"
        description={infoDescription}
      />
      <InfoBlock
        imgSrc="/assets/pexels-rachel-claire-4825701 1.png"
        headLines={"the experience."}
        theme="turquoise"
        description={infoDescription}
        reverse
      />
    </main>
  );
};

export default Experience;
