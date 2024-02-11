import React from "react";

type HeadlineProps = {
  headline: string;
  id?: string;
};

const Heading = ({ headline, id = "" }: HeadlineProps) => {
  return (
    <h3 className="articleComponentHeading" id={id}>
      {headline}
    </h3>
  );
};

export default Heading;
