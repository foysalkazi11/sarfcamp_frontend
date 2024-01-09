/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    displayName: "the camp.",
    slug: "/",
  },
  {
    displayName: "the expr.",
    slug: "/experience",
  },
  {
    displayName: "the blog.",
    slug: "/blog",
  },
  {
    displayName: "the events.",
    slug: "/events",
  },
];
const policiesLinks = [
  {
    displayName: "Imprint",
    slug: "#",
  },
  {
    displayName: "Terms and Conditions",
    slug: "#",
  },
  {
    displayName: "Data Protection",
    slug: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <img className="footer__logo" src="/assets/logo.svg" alt="logo" />
        <ul className="footer__links">
          {navLinks?.map((link) => (
            <li key={link?.slug}>
              <Link href={link?.slug}>
                <h5>{link?.displayName}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies--nav">
          {policiesLinks?.map((link) => (
            <li key={link?.slug}>
              <Link href={link?.slug}>{link?.displayName}</Link>
            </li>
          ))}
        </ul>
        <p className="footer__allRights">
          © Sam’s Surfcamp - all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
