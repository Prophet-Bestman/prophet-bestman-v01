import React, { PropsWithChildren } from "react";
import { Montserrat } from "next/font/google";
import Navbar from "./Navbar";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
