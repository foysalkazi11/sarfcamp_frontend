import { getStringAfterDot } from "@/utils/helper.utils";
import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import ParagraphWithImage from "./ParagraphWithImage";
import LandscapeImage from "./LandScapeImage";

const ArticleContent = ({ component }: { component: any }) => {
  const componentType = getStringAfterDot(component?.__component);
  switch (componentType) {
    case "headline":
      return <Heading headline={component?.headline} id={component?.slug} />;
    case "paragraph-with-image":
      return <ParagraphWithImage {...component} />;
    case "landscape-image":
      return <LandscapeImage {...component} />;
    case "paragraph":
      return <Paragraph text={component?.Paragraph} />;

    default:
      return null;
  }
};

export default ArticleContent;
