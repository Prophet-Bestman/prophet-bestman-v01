import React, { PropsWithChildren } from "react";
import { Montserrat } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${montserrat.className} bg-primary`}>
      <Navbar />
      <div className="mt-[90px]">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
