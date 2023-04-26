import { FeatureOne } from "@/svgs";
import React from "react";

const FeaturesSection = () => {
  return (
    <div className="bg-darkShade  py-[96px] relative grid gap-y-32 lg:gap-y-20 ">
      {[...Array(3)].map((_, i) => (
        <div
          className="flex flex-col lg:grid grid-cols-12 gap-12 lg:gap-9 relative z-10 px-8 md:px-20 xl:px-[104px] "
          key={i}
        >
          {/* ====== BACKGROUND SHAPE START ====== */}
          <div
            className={`absolute items-center h-full w-full hidden lg:grid grid-cols-12 gap-12 lg:gap-9 `}
          >
            <div
              className={`h-[55%] lg:h-[70%] w-full bg-lemon col-span-12 ${
                i === 1
                  ? "lg:col-start-8 lg:col-end-13 "
                  : "lg:col-span-6 xl:col-span-5 "
              }`}
            ></div>
          </div>
          {/* ====== BACKGROUND SHAPE END ====== */}

          <div
            className={`col-span-12 lg:col-span-6 xl:col-span-5 relative h-[280px] sm:h-[340px] p mx-auto  ${
              i === 1 ? "order-1 lg:order-2 " : ""
            }`}
          >
            <img
              src="/img/feature.jpg"
              className={`w-full h-full object-cover rounded-lg sm:max-w-[420px] border-8 border-offWhite  `}
            />
          </div>
          <div
            className={`col-span-12 lg:col-span-6 xl:col-span-7 my-auto text-offWhite ${
              i === 1 ? "order-2 lg:order-1" : ""
            }`}
          >
            <h3 className="text-2xl font-extrabold mb-8">Development</h3>

            <p className="text-lg font-medium mb-2">
              Some--kinda text that says something smart Some--kinda text that
              says something smart Some--kinda text that says something smart
              and some more stuffs for you
            </p>
            <p className="text-lg font-medium mb-2">
              Some--kinda text that says something smart Some--kinda text that
              says something smart Some--kinda text that says something smart
              and some more stuffs for you
            </p>
          </div>
        </div>
      ))}

      {/* <div className="grid grid-cols-12 gap-12 lg:gap-9">
        <div className="col-span-12 lg:col-span-6 xl:col-span-7  px-8 md:px-[65px] xl:pl-[105px] my-auto text-offWhite order-2 lg:order-1 ">
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

        <div className="col-span-12 lg:col-span-6 xl:col-span-5 relative h-[340px]   order-1 lg:order-2">
          <div className="absolute flex items-center h-full w-full ">
            <img
              src="/img/FeatureOne.svg"
              className="mx-8 lg:mx-[65px] lg:mr-[65px] xl:mr-[105px] absolute w-full max-w-[340px] md:max-w-[430px] "
            />
            <div className="h-[55%] lg:h-[70%] w-full bg-lemon pr-5 "></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-12 lg:gap-9 relative z-10">
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 relative h-[340px]  ">
          <div className="absolute flex items-center h-full w-full ">
            <img
              src="/img/FeatureOne.svg"
              className="mx-8 lg:mx-[65px] xl:ml-[105px] absolute w-full max-w-[340px] md:max-w-[430px] "
            />
            <div className="h-[55%] lg:h-[70%] w-full bg-lemon pr-5 "></div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-7 px-8 md:px-[65px] xl:pr-[105px] my-auto text-offWhite">
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
      </div> */}

      <div className="clip-bottom w-full"></div>
    </div>
  );
};

export default FeaturesSection;
