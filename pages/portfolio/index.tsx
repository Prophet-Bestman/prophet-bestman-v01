import { PortfolioCard } from "@/components";
import { navStates, useNavContext } from "@/contexts/NavContext";
import React, { useEffect } from "react";

const Portfolio = () => {
  const { setActiveNav, activeNav } = useNavContext();

  console.log(activeNav);

  useEffect(() => {
    setActiveNav(navStates.PORTFOLIO);
  }, []);

  return (
    <div className="min-h-screen bg-primary relative py-10">
      {/* ===== SHAPES ====== */}
      <div className="shape left-shape"></div>
      <div className="shape right-shape"></div>

      <main className="px-6 sm:px-8 md:px-[72px]">
        <h2 className="py-10 sm:py-20 md:py-40 text-offWhite font-bold text-center text-[32px]">
          {` /Work i’ve Done So far.`}
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10 mb-40 ">
          {[...Array(9)].map((_, i) => (
            <PortfolioCard key={i} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
