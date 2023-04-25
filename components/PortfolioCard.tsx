import Link from "next/link";
import React from "react";

const PortfolioCard = () => {
  return (
    <div className="text-offWhite w-full max-w-[400px] h-[400px] border-4 border-offWhite rounded-[20px] mx-auto ">
      <div className="relative rounded-t-[20px] ">
        <img
          src="/img/product.jpg"
          alt=""
          className="w-full h-full object-cover rounded-t-[20px] relative"
        />

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
          <p className="text-offWhite font-bold text-3xl">LOGO</p>
        </div>
        <div className="bg-black rounded-t-[20px] opacity-60 absolute top-0 left-0 w-full h-full "></div>
      </div>

      <div className="bg-primary py-10 px-3 text-center rounded-b-[16px] ">
        <h3 className="text-xl font-semibold mb-2">Project Name</h3>

        <Link href="#">See Details</Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
