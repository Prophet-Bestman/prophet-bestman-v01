import { NavIcon } from "@/svgs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
];

const Navbar = () => {
  const [active] = useState("Home");
  const [makeSeeThrough, setMakeSeeThrough] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (window.scrollY > 100 && !makeSeeThrough) {
        setMakeSeeThrough(true);
      } else if (window.scrollY < 100 && makeSeeThrough) {
        setMakeSeeThrough(false);
      }
    };
  }
  return (
    <div
      className={`h-[90px] px-[90px] flex items-center bg-[#4831d4] z-30 fixed w-full top-0 ${
        makeSeeThrough ? "opacity-70" : ""
      }  `}
    >
      <h1 className="uppercase font-[900] text-offWhite text-2xl absolute">
        PBM
      </h1>

      <div className="flex gap-[56px] text-2xl text-offWhite font-semibold mx-auto">
        {links.map((link) => (
          <Link key={link.name} href={link.link}>
            <p
              className={`${
                active === link.name ? "opacity-100" : "opacity-50"
              }`}
            >
              {link.name}
              {active == link.name && (
                <span className="mt-2">
                  <NavIcon />
                </span>
              )}
            </p>
          </Link>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
