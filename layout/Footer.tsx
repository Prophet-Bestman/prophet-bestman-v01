import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SendIcon } from "@/svgs";
import Link from "next/link";

const socialMedia = [
  {
    icon: <AiFillLinkedin />,
    link: "#",
  },
  {
    icon: <AiOutlineTwitter />,
    link: "#",
  },
  {
    icon: <AiFillInstagram />,
    link: "#",
  },
  {
    icon: <IoLogoWhatsapp />,
    link: "#",
  },
];

const Footer = () => {
  return (
    <div
      className="
        px-8 md:px-12 lg:px-20 py-[60px] bg-darkShade flex flex-col
      "
    >
      <div className=" text-offWhite grid md:grid-cols-2 items-center gap-y-24 ">
        <div className="col-span-1">
          <h3 className="font-semibold text-2xl md:text-3xl lg:text-[32px] mb-2 ">
            CONNECT WITH ME
          </h3>

          <p className="text-base lg:text-[20px] max-w-[636px] opacity-70">
            Something and other things joining together to develop the mimshack
            vibes and anointingSomething and other things joining together to
            develop the mimshack vibes and anointing
          </p>

          <div className="relative w-full md:max-w-[500px] mt-[60px] ">
            <input
              type="text"
              className="bg-[#F3F3F3] w-full px-4 md:px-10 py-4  md:py-[26px] text-base md:text-lg text-[#000A21] rounded-[10px]  "
              placeholder="Send a message"
            ></input>
            <div className="absolute top-4 md:top-[26px] right-10 cursor-pointer ">
              <SendIcon />
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-center md:justify-end">
          <div>
            <h4 className="text-center mb-2 text-xl font-semibold">
              Social Media
            </h4>

            <div className="flex gap-2">
              {socialMedia.map((item, i) => (
                <Link
                  href={item.link}
                  key={i}
                  className="w-12 md:w-[56px] h-12 md:h-[56px] rounded-full text-[#3E5EAB] cursor-pointer text-2xl md:text-3xl bg-offWhite flex justify-center items-center hover:scale-90 transition-all ease-in-out duration-300 hover:opacity-75 "
                >
                  {item?.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[712px] border-t border-t-[#F3F3F3] mx-auto pt-6 mt-[66px] ">
        <p className="text-[#F3F3F3] opacity-70 text-center text-base md:text-xl">
          © Prophet Bestman 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
