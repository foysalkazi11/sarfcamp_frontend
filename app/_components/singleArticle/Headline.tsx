import React from "react";

type HeadlineProps = {
  headline: string;
  id?: string;
};

const Headline = ({ headline, id = "" }: HeadlineProps) => {
  return <h3 id={id}>{headline}</h3>;
};

export default Headline;
