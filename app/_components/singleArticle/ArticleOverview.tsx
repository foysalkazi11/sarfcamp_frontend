import Link from "next/link";
import React from "react";
const headingLinks = [
  { id: "34232423kljlk34", title: "Materials" },
  { id: "3423242kljlk34", title: "Design Considerations" },
  { id: "3423223kljlk34", title: "Shaping Process" },
  { id: "34232423ljlk34", title: "Testing and Refinement" },
];

const ArticleOverview = () => {
  return (
    <section className="articleOverview">
      <div className="articleOverview__contentBox">
        <p className="articleOverview__content">
          Shaping surfboards is a blend of art and science, with the goal of
          crafting the perfect board that suits a surfer's unique needs and the
          waves they intend to ride. Here's a brief summary of how surfboards
          are shaped and the design considerations that go into crafting the
          ideal surfboard
        </p>
        <ol className="articleOverview__headingLinks">
          {headingLinks?.map((link) => {
            return (
              <li key={link?.id}>
                <Link href={"#" + link?.id}>{link?.title}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ArticleOverview;
