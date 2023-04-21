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
        px-20 py-[60px] bg-darkShade flex flex-col
      "
    >
      <div className=" text-offWhite grid grid-cols-2 items-center ">
        <div className="col-span-1">
          <h3 className="font-semibold text-[32px] mb-2 ">CONNECT WITH ME</h3>

          <p className="text-[20px] opacity-70">
            Something and other things joining together to develop the mimshack
            vibes and anointingSomething and other things joining together to
            develop the mimshack vibes and anointing
          </p>

          <div className="relative w-full max-w-[500px] mt-[60px] ">
            <input
              type="text"
              className="bg-[#F3F3F3] w-full px-10 py-[26px] text-lg text-[#000A21] rounded-[10px]  "
              placeholder="Send a message"
            ></input>
            <div className="absolute top-[26px] right-10 cursor-pointer ">
              <SendIcon />
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-end">
          <div>
            <h4 className="text-center mb-2 text-xl font-semibold">
              Social Media
            </h4>

            <div className="flex gap-[5px]">
              {socialMedia.map((item, i) => (
                <Link
                  href={item.link}
                  key={i}
                  className="w-[56px] h-[56px] rounded-full text-[#3E5EAB] cursor-pointer text-3xl bg-offWhite flex justify-center items-center"
                >
                  {item?.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[712px] border-t border-t-[#F3F3F3] mx-auto pt-6 mt-[66px] ">
        <p className="text-[#F3F3F3] opacity-70 text-center text-xl">
          © Prophet Bestman 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
