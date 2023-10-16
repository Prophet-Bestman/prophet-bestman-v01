import React from "react";

const JobExperience = () => {
  return (
    <div className="py-16 bg-primary ">
      <div className="mb-8 text-3xl font-bold text-center text-white ">
        Skills
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12 px-8 overflow-hidden md:gap-20 md:px-12 lg:px-32">
        {logos.map((logo) => (
          <img key={logo} src={logo} className="w-28" />
        ))}
      </div>
    </div>
  );
};

export default JobExperience;

const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
];
