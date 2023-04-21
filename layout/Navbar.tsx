import { NavIcon } from "@/svgs";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Portfolio",
    link: "/",
  },
];

const Navbar = () => {
  const [active] = useState("Home");
  return (
    <div className="h-[90px] px-[90px] flex items-center bg-primary relative ">
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
