import { FeatureOne } from "@/svgs";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Hey",
  },
  {
    name: "Hi",
  },
  {
    name: "Hello",
  },
];

const FeaturesSection = () => {
  const [screenSize, setScreenSize] = useState("");
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        setScreenSize(
          window.innerWidth > 1260
            ? "large"
            : // : window.innerWidth > 1024
              // ? "small"
              "small"
        );
      }
    }, 0);
  }, []);

  console.log("Screen Size:", screenSize);
  return (
    <div className="bg-darkShade py-[96px] relative grid gap-y-32 lg:gap-y-20 overflow-hidden ">
      {features.map((feature, i) => (
        <div
          className="flex flex-col lg:grid grid-cols-12 gap-12 lg:gap-9 relative z-10 px-8 md:px-20 xl:px-[104px] "
          key={`${feature.name}-${i}`}
        >
          {/* ====== BACKGROUND SHAPE START ====== */}
          <div
            className={`absolute items-center h-full w-full hidden lg:grid grid-cols-12 gap-12 lg:gap-9 `}
          >
            <motion.div
              initial={{ x: i === 1 ? 500 : -500, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className={`h-[55%] lg:h-[70%] w-full bg-lemon col-span-12 ${
                i === 1
                  ? "lg:col-start-8 lg:col-end-13 "
                  : "lg:col-span-6 xl:col-span-5 "
              }`}
            ></motion.div>
          </div>
          {/* ====== BACKGROUND SHAPE END ====== */}

          <div
            className={`col-span-12 lg:col-span-6 xl:col-span-5 relative h-[280px] sm:h-[340px] p mx-auto ${
              i === 1 ? "order-1 lg:order-2 " : ""
            }`}
          >
            {/* <motion.div
              initial={{ x: i === 1 ? 200 : -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              
            </motion.div> */}

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
            <motion.div
              // whileInView={{
              //   x: i === 1 ? [-600, 0] : [600, 0],
              //   opacity: [0, 1],
              // }}
              transition={{
                delay: 0.2,
                duration: 1,
                type: "spring",
                damping: 8,
                stiffness: 40,
              }}
              whileInView={
                screenSize === "large"
                  ? {
                      x: i === 1 ? [-600, 0] : [600, 0],
                      opacity: [0, 1],
                    }
                  : {
                      x: i === 1 ? [-100, 0] : [100, 0],
                      opacity: [0, 1],
                    }
              }
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
            </motion.div>
          </div>
        </div>
      ))}

      <div className="clip-bottom w-full"></div>
    </div>
  );
};

export default FeaturesSection;
