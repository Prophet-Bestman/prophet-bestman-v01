import { useNavContext } from "@/contexts/NavContext";
import { NavIcon } from "@/svgs";
import { LazyMotion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Drawer from "react-modern-drawer";
import { motion } from "framer-motion";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Blog",
    link: "https://prophet-bestman.hashnode.dev/",
    newTab: true,
  },
  {
    name: "Resume",
    link: "https://docs.google.com/document/d/1hbek64UpF5PFlzVfoG0HNFi7RhchxYLdk-GHRtUdpco/edit?usp=sharing",
    newTab: true,
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
      className={`h-[90px] px-8 sm:px-[90px] flex items-center bg-[#4831d4] z-40 fixed w-full top-0 ${
        makeSeeThrough ? "opacity-90" : ""
      }  `}
    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.35 }}
        className="uppercase font-[900] text-offWhite text-lg sm:text-2xl absolute"
      >
        PBM
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.35 }}
        className="hidden md:flex gap-[56px] text-2xl text-offWhite font-semibold mx-auto"
      >
        {links.map((link) => (
          <Link
            target={link.newTab ? "_blank" : ""}
            key={link.name}
            href={link.link}
          >
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
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="block md:hidden ml-auto"
      >
        <AiOutlineMenu
          className="text-offWhite text-2xl"
          onClick={toggleDrawer}
        />
      </motion.div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="w-full max-w-xs bg-primary "
        size={"500"}
      >
        <div className="bg-primary h-full w-full  px-6">
          <div className="flex justify-end text-offWhite pt-6">
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={toggleDrawer}
            />
          </div>
          {/* {isOpen && ( */}
          <motion.ul className="py-20 grid justify-end gap-6 relative z-30">
            {isOpen &&
              links.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Link
                    target={link.newTab ? "_blank" : ""}
                    href={link.link}
                    onClick={toggleDrawer}
                    key={link.name}
                  >
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
                </motion.li>
              ))}
          </motion.ul>
          {/* )} */}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
