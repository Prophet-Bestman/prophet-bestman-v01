import { Project } from "@/types/projectTypes";
import Link from "next/link";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const PortfolioCard = ({ project }: { project: Project }) => {
  return (
    <div className="text-offWhite w-full max-w-[400px] h-[450px] border-4 border-offWhite rounded-[20px] mx-auto ">
      <div className="relative h-[58%] rounded-t-[20px] ">
        <img
          src={project.coverImage?.url || "/img/product.jpg"}
          alt={project?.projectName}
          className="w-full h-full object-cover rounded-t-[12px] relative"
        />

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
          {/* <p className="text-offWhite font-bold text-3xl">LOGO</p> */}
          <img
            src={project.brandLogo?.url || "/img/product.jpg"}
            alt={`${project?.projectName}-logo`}
            className="h-[60px]  object-cover rounded-t-[20px] relative"
          />
        </div>
        <div className="bg-[#323232] rounded-t-[20px] opacity-75 absolute top-0 left-0 w-full h-full "></div>
      </div>

      <div className="bg-primary py-5 px-3 text-center rounded-b-[16px] h-[42%] text-gray-100 ">
        <h3 className="text-xl font-semibold mb-2 ">{project.projectName}</h3>
        <p className="text-base text-gray-300 leading-tight mb-3">
          {project.summary}
        </p>

        <div className="flex justify-center items-center gap-1 font-bold text-lemon">
          <AiOutlineLink size="18px" />
          <Link href={`/portfolio/${project.slug}`} className="text-sm ">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
