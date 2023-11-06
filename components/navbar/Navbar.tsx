"use client";
import Link from "next/link";
import DarkMode from "../DarkMode/DarkMode";
import { signOut, useSession } from "next-auth/react";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  return (
    <div className="py-6 sticky top-0 z-10">
      <div className="flex justify-between flex-wrap md:flex-nowrap items-center">
        <Link href="/">Kiko Blog</Link>
        <div className="flex gap-6 flex-wrap md:flex-nowrap items-center">
          <DarkMode />
          {links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          ) : (
            <Link href="/dashboard/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
