import React, { useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import useIsInViewport from "@/hooks";

const Progress = ({
  percentage,
  name,
}: {
  percentage: number;
  name: string;
}) => {
  const ref1 = useRef<any>(null);

  const isInViewport = useIsInViewport(ref1);
  return (
    <div ref={ref1}>
      <div className="flex justify-between items-center text-lg font-semibold">
        <div>{name}</div>

        <div>{isInViewport && <CountUp end={percentage} duration={4} />} %</div>
      </div>

      <div className="w-full h-6 border-2 border-offWhite overflow-hidden ">
        <motion.div
          whileInView={{
            x: [-100, 0],
          }}
          transition={{
            delay: 0,
            duration: 4,
          }}
          className={`bg-lemon h-full`}
          style={{
            width: `${percentage}%`,
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Progress;
