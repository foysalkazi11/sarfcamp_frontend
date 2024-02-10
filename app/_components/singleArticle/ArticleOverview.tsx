import Link from "next/link";
import React from "react";

type headingLinksType = {
  id: number;
  __component: string;
  headline: string;
  slug: string;
};

type ArticleOverviewProps = {
  excerpt?: string;
  headingLinks?: headingLinksType[];
};

const ArticleOverview = ({
  excerpt = "",
  headingLinks = [],
}: ArticleOverviewProps) => {
  return (
    <section className="articleOverview">
      <div className="articleOverview__contentBox">
        <p className="articleOverview__content">{excerpt}</p>
        <ol className="articleOverview__headingLinks">
          {headingLinks?.map((link) => {
            return (
              <li key={link?.id}>
                <Link href={"#" + link?.slug}>{link?.headline}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ArticleOverview;
