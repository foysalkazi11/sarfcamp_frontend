import React from "react";
import HighLightArticle from "../_components/blog/HighLightArticle";
import SubscribeToNewsletter from "../_components/blog/SubscribeToNewsletter";

const Blog = () => {
  return (
    <main className="blog-page">
      <HighLightArticle />
      <SubscribeToNewsletter />
    </main>
  );
};

export default Blog;
