import {
  HeroImgBottomLeftEdge,
  HeroImgBottomRightEdge,
  HeroImgTopLeftEdge,
  HeroImgTopRightEdge,
} from "@/svgs";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-11 bg-primary min-h-[89vh] px-6 sm:px-20 md:px-[90px] py-[50px] gap-[75px] items-center border-b-[28px] border-b-lemon ">
        <div className="col-span-1 lg:col-span-6 h-full text-offWhite flex flex-col justify-center order-2 lg:order-1  ">
          <motion.h1
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.75 }}
            className="text-[40px] md:text-[50px] mb-[30px] "
          >
            Front-End{" "}
            <span className="font-bold">
              <span className="bg-lemon text-primary rounded-tl-[50px] rounded-br-[50px] py-3">
                Dev
              </span>
              eloper
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.85,
              type: "spring",
              damping: 4,
              stiffness: 50,
            }}
          >
            <h3 className="font-extrabold text-lg">Prophet Bestman</h3>
            <p className="font-normal md:font-medium text-base md:text-lg max-w-2xl h-[180px] md:h-[130px]">
              <Typewriter
                words={[
                  "Hello, I'm Prophet Ogwuche, an experienced React.js frontend developer with a strong skill set in HTML, CSS, JavaScript, TypeScript, Next.js, GraphQL, React-Query, Redux-toolkit, Webpack, and a vast list of React-related libraries",
                  "I've had the privilege of contributing to the development of large-scale enterprise applications for various organizations, including banks, using APIs such as Google Maps, Google Places, and Paystack. My experience in utilizing these APIs has given me a strong understanding of how to integrate third-party services into web applications seamlessly.",
                  "As a frontend developer, I am passionate about creating intuitive and engaging user interfaces that enhance the user experience. My expertise in React.js and related technologies enables me to build responsive, scalable, and performant web applications that meet the needs of clients and end-users.",
                  "Take a look at my portfolio to see some of the web applications that I've worked on. I'm always eager to take on new challenges, and I look forward to collaborating with you to create outstanding digital experiences for your users. Let's build something great together!",
                ]}
                loop={100}
                cursor
                cursorStyle="_"
                typeSpeed={15}
                deleteSpeed={5}
                delaySpeed={4000}
              />
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
          </motion.div>

          {/* <p className="font-normal md:font-medium text-base md:text-lg">
            Some--kinda text that says something smart Some--kinda text that
            says something smart Some--kinda text that says something smart and
            some more stuffs for you
          </p> */}
        </div>
        <div className="col-span-1 lg:col-span-5 h-[450px] sm:h-[512px] relative order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.3,
              duration: 0.85,
              type: "spring",
              damping: 4,
              stiffness: 50,
            }}
            className="h-full"
          >
            <div className="w-full max-w-[435px] h-full relative flex justify-center items-center mx-auto ">
              <HeroImgTopLeftEdge />
              <HeroImgTopRightEdge />
              <HeroImgBottomLeftEdge />
              <HeroImgBottomRightEdge />

              <motion.div
                animate={{
                  scale: [1, 1.2, 1.2, 1, 1],
                  rotate: [0, 0, 270, 270, 12],
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 1.7,
                  repeat: Infinity,
                  repeatDelay: 10,
                }}
                className="hero-card-one "
              >
                {/* <div className="hero-card-one"></div> */}
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1.2, 1, 1],
                  rotate: [0, 0, -270, -270, -12],
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 1.7,
                  repeat: Infinity,
                  repeatDelay: 10,
                }}
                className="hero-card-two "
              >
                {/* <div className="hero-card-two"></div> */}
              </motion.div>
              <div className="hero-img"></div>
            </div>
            <div className="blur-ellipse w-full max-w-[460px]"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
