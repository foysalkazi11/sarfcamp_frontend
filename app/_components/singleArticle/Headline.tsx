import React from "react";

type HeadlineProps = {
  headline: string;
};

const Headline = ({ headline }: HeadlineProps) => {
  return <h3>{headline}</h3>;
};

export default Headline;
