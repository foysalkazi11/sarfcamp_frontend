/* eslint-disable @next/next/no-img-element */

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
        <button className="btn btn--medium btn--turquoise">Read more</button>
      </div>
      <img
        className="highLightArticle__image"
        src="/assets/harry-holder-NbPJ8HM-w8c-unsplash 1.png"
        alt="img"
      />
    </section>
  );
};

export default HighLightArticle;
