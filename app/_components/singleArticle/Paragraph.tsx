import React from "react";
import Markdown from "react-markdown";

const Paragraph = ({ text }: { text: string }) => {
  return <Markdown className="copy articleComponentParagraph">{text}</Markdown>;
};

export default Paragraph;
