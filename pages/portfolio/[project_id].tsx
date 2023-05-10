import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { navStates, useNavContext } from "@/contexts/NavContext";
import { useGetSingleProject } from "@/api";
import { useRouter } from "next/router";
import { Loading } from "@/components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { AiOutlineLink } from "react-icons/ai";

const SingleProject = () => {
  const { setActiveNav } = useNavContext();

  useEffect(() => {
    setActiveNav(navStates.PORTFOLIO);
  }, []);

  const router = useRouter();

  const { data: project, isLoading } = useGetSingleProject(
    router.query.project_id as string
  );

  console.log(project);

  return (
    <div className="min-h-screen bg-primary relative py-10">
      {/* ===== SHAPES ====== */}
      <div className="shape left-shape"></div>
      <div className="shape right-shape"></div>

      {isLoading ? (
        <Loading />
      ) : (
        typeof project !== "undefined" && (
          <main className="px-6 sm:px-8 md:px-[72px] mb-28 grid">
            <h2 className="py-10 sm:py-20 text-offWhite font-bold text-center text-[32px]">
              {project.projectName}
            </h2>

            <motion.div
              whileInView={{
                x: [-100, 0],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                type: "spring",
                damping: 6,
                stiffness: 50,
              }}
              className="relative h-[300px] md:h-[500px] border-8 border-offWhite rounded-[20px]  max-w-5xl mx-auto "
            >
              <img
                src={project.coverImage.url}
                className=" w-full h-full   rounded-[20px] object-cover relative z-0 "
                alt=""
              />

              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-30">
                <img
                  src={project.brandLogo?.url || "/img/product.jpg"}
                  alt={`${project?.projectName}-logo`}
                  className="h-[60px]  object-cover rounded-t-[20px] relative"
                />
              </div>
              <div className="bg-[#323232] rounded-[20px] opacity-60 absolute top-0 left-0 w-full h-full z-20 "></div>
            </motion.div>

            <div className="flex justify-center gap-3 font-bold text-lg my-7 text-offWhite">
              {project.technologies?.map((tech, i) => (
                <div className="flex gap-3" key={i}>
                  <p>{tech} </p>
                  {i < project.technologies.length - 1 && "|"}
                </div>
              ))}
            </div>

            <a
              href={`${project.linkToProject}`}
              className="text-center font-bold text-lg mx-auto text-lemon"
              target="_blank"
              // rel="noreferrer"
            >
              <div className="flex items-center gap-1 ">
                <AiOutlineLink size="24px" />
                See Project
              </div>
            </a>

            <div className="mt-20 relative z-10">
              <motion.h2
                whileInView={{
                  x: [100, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  delay: 0.3,
                  duration: 3,
                  type: "spring",
                  damping: 6,
                  stiffness: 50,
                }}
                className=" text-lemon font-bold text-center text-[32px] mb-8"
              >
                Project Details
              </motion.h2>

              <motion.div
                whileInView={{
                  y: [50, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  delay: 0.3,
                  duration: 3,
                  type: "spring",
                  damping: 6,
                  stiffness: 50,
                }}
                className="grid text-base md:text-lg gap-[72px] text-center max-w-5xl mx-auto"
              >
                <ReactMarkdown className="whitespace-pre-wrap">
                  {project.projectDetails.markdown}
                </ReactMarkdown>
                {/* <p>
                  Some--kinda text that says something smart Some--kinda text
                  that says something smart Some--kinda text that says something
                  smart and some more stuffs for youSome--kinda text that says
                  something smart Some--kinda text that says something smart
                  Some--kinda text that says something smart and some more
                  stuffs for youSome--kinda text that says something smart
                  Some--kinda text that says something smart Some--kinda text
                  that says something smart and some more stuffs for
                  youSome--kinda text that says something smart Some--kinda text
                  that says something smart Some--kinda text that says something
                  smart and some more stuffs for youSome--kinda text that says
                  something smart Some--kinda text that says something smart
                  Some--kinda text that says something smart and some more
                  stuffs for youSome--kinda text that says something smart
                  Some--kinda text that says something smart Some--kinda text
                  that says something smart and some more stuffs for
                  youSome--kinda text that says something smart Some--kinda text
                  that says something smart Some--kinda text that says something
                  smart and some more stuffs for you
                </p>
                <p>
                  Some--kinda text that says something smart Some--kinda text
                  that says something smart Some--kinda text that says something
                  smart and some more stuffs for youSome--kinda text that says
                  something smart Some--kinda text that says something smart
                  Some--kinda text that says something smart and some more
                  stuffs for youSome--kinda text that says something smart
                  Some--kinda text that says something smart Some--kinda text
                  that says something smart and some more stuffs for
                  youSome--kinda text that says something smart Some--kinda text
                  that says something smart Some--kinda text that says something
                  smart and some more stuffs for youSome--kinda text that says
                  something smart Some--kinda text that says something smart
                  Some--kinda text that says something smart and some more
                  stuffs for youSome--kinda text that says something smart
                  Some--kinda text that says something smart Some--kinda text
                  that says something smart and some more stuffs for
                  youSome--kinda text that says something smart Some--kinda text
                  that says something smart Some--kinda text that says something
                  smart and some more stuffs for you
                </p> */}
              </motion.div>
            </div>
          </main>
        )
      )}
    </div>
  );
};

export default SingleProject;
