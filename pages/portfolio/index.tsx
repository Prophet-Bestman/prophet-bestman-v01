import { Loading, PortfolioCard } from "@/components";
import { navStates, useNavContext } from "@/contexts/NavContext";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useGetAllProjects } from "@/api";

const Portfolio = () => {
  const { setActiveNav } = useNavContext();

  useEffect(() => {
    setActiveNav(navStates.PORTFOLIO);
  }, []);
  const { data, isLoading } = useGetAllProjects();

  return (
    <div className="min-h-screen bg-primary relative py-10">
      {/* ===== SHAPES ====== */}
      <div className="shape left-shape"></div>
      <div className="shape right-shape"></div>

      <main className="px-6 sm:px-8 md:px-[72px] grid">
        <h2 className="py-10 sm:py-20 md:py-40 text-offWhite font-bold text-center text-[32px]">
          <Typewriter
            words={[` /Work i’ve Done So far.`]}
            loop={100}
            cursor
            cursorStyle="_"
            typeSpeed={30}
            deleteSpeed={10}
            delaySpeed={3000}
          />
        </h2>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 relative z-10 mb-40 justify-center ">
            {!!data?.projects?.length &&
              data?.projects?.map((project, i) => (
                <motion.div
                  key={project?.id}
                  whileInView={{
                    y: [100, 0],
                    opacity: [0, 1],
                  }}
                  transition={{
                    delay: 0.2 + 0.1 * i,
                    duration: 0.4,
                    type: "spring",
                    damping: 6,
                    stiffness: 50,
                  }}
                  className="mx-auto"
                >
                  <PortfolioCard project={project} />
                </motion.div>
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;
