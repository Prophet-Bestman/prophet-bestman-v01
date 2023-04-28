import React from "react";
import { motion } from "framer-motion";
import Progress from "./Progress";

const JobExperience = () => {
  return (
    <div className="bg-primary grid lg:grid-cols-2 px-8 md:px-12 lg:px-20 items-center py-16 gap-6 overflow-hidden">
      <div className="col-span-1">
        <motion.div
          whileInView={{
            scale: [0, 1],
            opacity: [0, 1],
          }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            type: "spring",
            damping: 5.5,
            stiffness: 25,
          }}
        >
          <img src="/img/Product.svg" />
        </motion.div>
      </div>

      <motion.div className="col-span-1">
        <h3 className="font-extrabold">JOb Experience Level</h3>

        <div className="grid gap-3 my-8">
          <Progress percentage={96} name="HTML" />
          <Progress percentage={87} name="CSS" />
          <Progress percentage={83} name="SASS" />
          <Progress percentage={85} name="JavaScript" />
          <Progress percentage={81} name="TypeScript" />
          <Progress percentage={85} name="ReactJS" />
          <Progress percentage={84} name="NextJS" />
        </div>
      </motion.div>
    </div>
  );
};

export default JobExperience;
