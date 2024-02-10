import { getStringAfterDot } from "@/utils/helper.utils";
import React from "react";
import Headline from "./Headline";
import Paragraph from "./Paragraph";

const ArticleContent = ({ component }: { component: any }) => {
  const componentType = getStringAfterDot(component?.__component);
  switch (componentType) {
    case "headline":
      return <Headline headline={component?.headline} id={component?.slug} />;
    case "paragraph-with-image":
      return <p>paragraph-with-image</p>;
    case "landscape-image":
      return <p>landscape-image</p>;
    case "paragraph":
      return <Paragraph text={component?.Paragraph} />;

    default:
      break;
  }
  return <div>ArticleContent</div>;
};

export default ArticleContent;
