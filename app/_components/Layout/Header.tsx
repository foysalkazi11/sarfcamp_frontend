/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

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
];

type HeaderProps = {
  theme?: "white" | "black";
};
const Header = ({ theme = "black" }: HeaderProps) => {
  return (
    <header className={`header header--${theme}`}>
      <img
        className={`header__logo header__logo--${theme}`}
        src="/assets/logo.svg"
        alt="logo"
      />
      <ul className="header__nav">
        {navLinks?.map((link) => (
          <li key={link?.slug}>
            <Link href={link?.slug}>
              <h5>{link?.displayName}</h5>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={"/events"}>
        <button className="btn btn--black btn--small">BOOK NOW</button>
      </Link>
    </header>
  );
};

export default Header;
