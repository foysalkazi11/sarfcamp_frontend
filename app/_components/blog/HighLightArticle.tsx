/* eslint-disable @next/next/no-img-element */

import Button from "../Button";

const HighLightArticle = () => {
  return (
    <section className="highLightArticle">
      <div className="highLightArticle__info">
        <h3>3 tips for a super fast takeoff </h3>
        <p className="highLightArticle__description copy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem
          sunt facilis accusantium perferendis, quas molestiae atque esse sed
          incidunt eius ipsum quaerat? Ex nam architecto provident cum, in qui!
        </p>
        <Button text="Read more" />
      </div>
      <img
        className="highLightArticle__image"
        src="/assets/pexels-rachel-claire-4825701 1.png"
        alt="img"
      />
    </section>
  );
};

export default HighLightArticle;
