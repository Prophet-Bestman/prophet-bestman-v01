import { useNavContext } from "@/contexts/NavContext";
import { NavIcon } from "@/svgs";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Drawer from "react-modern-drawer";

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
  const { activeNav } = useNavContext();
  const [makeSeeThrough, setMakeSeeThrough] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

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
      className={`h-[90px] px-8 sm:px-[90px] flex items-center bg-[#4831d4] z-30 fixed w-full top-0 ${
        makeSeeThrough ? "opacity-90" : ""
      }  `}
    >
      <h1 className="uppercase font-[900] text-offWhite text-lg sm:text-2xl absolute">
        PBM
      </h1>

      <div className="hidden md:flex gap-[56px] text-2xl text-offWhite font-semibold mx-auto">
        {links.map((link) => (
          <Link key={link.name} href={link.link}>
            <p
              className={`${
                activeNav === link.name ? "opacity-100" : "opacity-50"
              }`}
            >
              {link.name}
              {activeNav == link.name && (
                <span className="mt-2">
                  <NavIcon />
                </span>
              )}
            </p>
          </Link>
        ))}
      </div>
      <div className="block md:hidden ml-auto">
        <AiOutlineMenu
          className="text-offWhite text-2xl"
          onClick={toggleDrawer}
        />
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="w-9/12"
        size={"500"}
      >
        <div className="bg-primary h-full w-full  px-6">
          <div className="flex justify-end text-offWhite py-6">
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={toggleDrawer}
            />
          </div>
          <div className="py-20 grid justify-end gap-6">
            {links.map((link) => (
              <Link key={link.name} href={link.link} onClick={toggleDrawer}>
                <p
                  className={`${
                    activeNav === link.name ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {link.name}
                  {activeNav == link.name && (
                    <span className="mt-2">
                      <NavIcon />
                    </span>
                  )}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
