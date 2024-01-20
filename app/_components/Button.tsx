"use client";
import Link from "next/link";
import React from "react";
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  size?: "small" | "medium";
  color?: "black" | "turquoise" | "orange" | "beige";
  text?: string;
  href?: string;
};
const Button = ({
  href = "",
  size = "medium",
  color = "turquoise",
  text = "Button",
  className = "",
  ...props
}: ButtonProps) => {
  return href ? (
    <Link href={href}>
      <button
        {...props}
        className={`btn btn--${size} btn--${color} ${className}`}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      {...props}
      className={`btn btn--${size} btn--${color} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
