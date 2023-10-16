import { FeatureOne } from "@/svgs";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Development",
    img: "/img/development.jpg",
    content: ` I offer top-notch software development services where I leverage the
        power of ReactJS, TypeScript, and cutting-edge technologies. With
        expertise in converting designs into elegant code, seamlessly
        integrating APIs, and ensuring smooth deployment, I create beautiful and
        high-performing applications. From start to finish, I prioritize user
        experience, performance, and efficiency. Trust me to bring your ideas to
        life and deliver exceptional software solutions.`,
  },
  {
    title: "Collaboration",
    img: "/img/collaboration.jpg",
    content: ` As a software developer, collaboration is at the core of my approach. I
        thrive in team environments and believe in the power of collective
        intelligence. I actively engage with my team members, fostering open
        communication and encouraging the sharing of ideas and perspectives. I
        value the diverse skill sets and expertise within the team, and I'm
        always ready to collaborate, brainstorm, and problem-solve together. By
        working collaboratively, we can leverage each other's strengths, tackle
        challenges more effectively, and ultimately deliver exceptional software
        solutions that exceed expectations.`,
  },
  {
    title: "Client Satisfaction",
    img: "/img/client-satisfaction.jpg",
    content: ` Understanding customer needs and translating their ideas into satisfying
        software is my utmost priority. I take the time to actively listen and
        engage with clients, ensuring I grasp the core of their vision. By
        asking the right questions and conducting thorough discussions, I gain a
        deep understanding of their requirements. I then utilize my technical
        expertise to transform their ideas into practical, reliable, and
        user-friendly software solutions. Constant communication and regular
        updates keep clients involved and informed throughout the development
        process, ensuring their satisfaction and the successful realization of
        their vision.`,
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

  return (
    <div className="bg-darkShade py-[96px] relative grid gap-y-32 lg:gap-y-44 overflow-hidden ">
      {features.map((feature, i) => (
        <div
          className="flex flex-col lg:grid grid-cols-12 gap-12 lg:gap-9 relative z-10 px-8 md:px-20 xl:px-[104px] "
          key={`${feature.title}-${i}`}
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
            <img
              src={feature?.img}
              className={`w-full h-full object-cover rounded-lg sm:max-w-[420px] border-8 border-offWhite  `}
            />
          </div>
          <div
            className={`col-span-12 lg:col-span-6 xl:col-span-7 my-auto text-offWhite ${
              i === 1 ? "order-2 lg:order-1" : ""
            }`}
          >
            <motion.div
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
              <h3 className="mb-8 text-2xl font-extrabold">{feature.title}</h3>

              <p className="mb-2 text-lg font-medium text-white/50">
                {feature.content}
              </p>
            </motion.div>
          </div>
        </div>
      ))}

      <div className="w-full clip-bottom"></div>
    </div>
  );
};

export default FeaturesSection;
