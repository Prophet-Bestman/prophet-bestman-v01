import { FeatureOne } from "@/svgs";
import React from "react";

const FeaturesSection = () => {
  return (
    <div className="bg-darkShade min-h-screen py-[96px] relative grid gap-y-20 ">
      <div className="grid grid-cols-12 gap-9 relative z-10 ">
        <div className="col-span-5 relative h-[340px]  ">
          <div className="absolute flex items-center h-full w-full ">
            <img src="/img/FeatureOne.svg" className="ml-[105px] absolute" />
            <div className="h-[70%] w-full bg-lemon pr-5 "></div>
          </div>
        </div>
        <div className="col-span-7 pr-[105px] my-auto text-offWhite">
          <h3 className="text-2xl font-extrabold mb-8">Development</h3>

          <p className="text-lg font-medium mb-2">
            Some--kinda text that says something smart Some--kinda text that
            says something smart Some--kinda text that says something smart and
            some more stuffs for you
          </p>
          <p className="text-lg font-medium mb-2">
            Some--kinda text that says something smart Some--kinda text that
            says something smart Some--kinda text that says something smart and
            some more stuffs for you
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-9">
        <div className="col-span-7 pl-[105px] my-auto text-offWhite">
          <h3 className="text-2xl font-extrabold mb-8">Research</h3>

          <p className="text-lg font-medium mb-2">
            Some--kinda text that says something smart Some--kinda text that
            says something smart Some--kinda text that says something smart and
            some more stuffs for you
          </p>
          <p className="text-lg font-medium mb-2">
            Some--kinda text that says something smart Some--kinda text that
            says something smart Some--kinda text that says something smart and
            some more stuffs for you
          </p>
        </div>

        <div className="col-span-5 relative h-[340px]  ">
          <div className="absolute flex items-center h-full w-full ">
            <img src="/img/FeatureOne.svg" className="mr-[105px] absolute" />
            <div className="h-[70%] w-full bg-lemon pr-5 "></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-9 relative z-10">
        <div className="col-span-5 relative h-[340px]  ">
          <div className="absolute flex items-center h-full w-full ">
            <img src="/img/FeatureOne.svg" className="ml-[105px] absolute" />
            <div className="h-[70%] w-full bg-lemon pr-5 "></div>
          </div>
        </div>
        <div className="col-span-7 pr-[105px] my-auto text-offWhite">
          <h3 className="text-2xl font-extrabold mb-8">Engineering</h3>

          <p className="text-lg font-medium mb-2">
            Some--kinda text that says something smart Some--kinda text that
            says something smart Some--kinda text that says something smart and
            some more stuffs for you
          </p>
          <p className="text-lg font-medium mb-2">
            Some--kinda text that says something smart Some--kinda text that
            says something smart Some--kinda text that says something smart and
            some more stuffs for you
          </p>
        </div>
      </div>

      <div className="clip-bottom w-full"></div>
    </div>
  );
};

export default FeaturesSection;
