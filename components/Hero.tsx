import {
  HeroImgBottomLeftEdge,
  HeroImgBottomRightEdge,
  HeroImgTopLeftEdge,
  HeroImgTopRightEdge,
} from "@/svgs";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-11 bg-primary h-[89vh] px-[90px] py-[50px] gap-[75px] items-center border-b-[28px] border-b-lemon ">
        <div className="col-span-6 h-full text-offWhite flex flex-col justify-center ">
          <h1 className="text-[50px] mb-[30px] ">
            Front-End{" "}
            <span className="font-bold">
              <span className="bg-lemon text-primary rounded-tl-[50px] rounded-br-[50px] py-3">
                Dev
              </span>
              eloper
            </span>
          </h1>

          <h3 className="font-extrabold text-lg">Prophet Bestman</h3>

          <p className="font-medium text-lg">
            Some--kinda text that says something smart Some--kinda text that
            says something smart Some--kinda text that says something smart and
            some more stuffs for you
          </p>

          <button
            className="
                      text-darkShade 
                      mt-[56px] px-[75px] py-4 
                      bg-offWhite rounded-[20px]
                      hover:opacity-70
                      transition-all ease-in-out duration-300
                      w-fit
                      "
          >
            <p className=" text-lg font-semibold opacity-75 "></p>
            View Portfolio
          </button>
        </div>
        <div className="col-span-5 h-[512px] relative">
          <div className="w-[435px] h-full relative flex justify-center items-center">
            <HeroImgTopLeftEdge />
            <HeroImgTopRightEdge />
            <HeroImgBottomLeftEdge />
            <HeroImgBottomRightEdge />

            <div className="hero-card-one"></div>
            <div className="hero-card-two"></div>
            <div className="hero-img"></div>
          </div>
          <div className="blur-ellipse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
