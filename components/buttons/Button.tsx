"use client";

import Link from "next/link";

type buttonTypes = {
  url: string;
  title: string;
  className?: string;
};

const Button = ({ title, url, className }: buttonTypes) => {
  return (
    <Link
      href={url}
      className={`flex justify-center items-center btn ${className}`}
    >
      <button>{title}</button>
    </Link>
  );
};

export default Button;
