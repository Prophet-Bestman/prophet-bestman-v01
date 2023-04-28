import React, { PropsWithChildren } from "react";
import { Montserrat } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className={`${montserrat.className} bg-primary`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-lemon origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar />
      <div className="mt-[90px]">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
