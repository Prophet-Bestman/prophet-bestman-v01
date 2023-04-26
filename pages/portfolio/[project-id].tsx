import React from "react";

const SingleProject = () => {
  return (
    <div className="min-h-screen bg-primary relative py-10">
      {/* ===== SHAPES ====== */}
      <div className="shape left-shape"></div>
      <div className="shape right-shape"></div>

      <main className="px-6 sm:px-8 md:px-[72px] mb-28">
        <h2 className="py-10 sm:py-20 text-offWhite font-bold text-center text-[32px]">
          Project Name
        </h2>

        <div className="relative h-[300px] md:h-[500px] border-8 border-offWhite rounded-[20px]  ">
          <img
            src="/img/product.jpg"
            className="w-full h-full   rounded-[20px] object-cover relative z-10 "
            alt=""
          />
          <div className="bg-black rounded-[20px] opacity-60 absolute top-0 left-0 w-full h-full z-20 "></div>
        </div>

        <div className="mt-20 relative z-10">
          <h2 className=" text-offWhite font-bold text-center text-[32px] mb-8">
            Indepth Discussing About This Project
          </h2>

          <div className="grid text-base md:text-lg gap-[72px] text-center">
            <p>
              Some--kinda text that says something smart Some--kinda text that
              says something smart Some--kinda text that says something smart
              and some more stuffs for youSome--kinda text that says something
              smart Some--kinda text that says something smart Some--kinda text
              that says something smart and some more stuffs for youSome--kinda
              text that says something smart Some--kinda text that says
              something smart Some--kinda text that says something smart and
              some more stuffs for youSome--kinda text that says something smart
              Some--kinda text that says something smart Some--kinda text that
              says something smart and some more stuffs for youSome--kinda text
              that says something smart Some--kinda text that says something
              smart Some--kinda text that says something smart and some more
              stuffs for youSome--kinda text that says something smart
              Some--kinda text that says something smart Some--kinda text that
              says something smart and some more stuffs for youSome--kinda text
              that says something smart Some--kinda text that says something
              smart Some--kinda text that says something smart and some more
              stuffs for you
            </p>
            <p>
              Some--kinda text that says something smart Some--kinda text that
              says something smart Some--kinda text that says something smart
              and some more stuffs for youSome--kinda text that says something
              smart Some--kinda text that says something smart Some--kinda text
              that says something smart and some more stuffs for youSome--kinda
              text that says something smart Some--kinda text that says
              something smart Some--kinda text that says something smart and
              some more stuffs for youSome--kinda text that says something smart
              Some--kinda text that says something smart Some--kinda text that
              says something smart and some more stuffs for youSome--kinda text
              that says something smart Some--kinda text that says something
              smart Some--kinda text that says something smart and some more
              stuffs for youSome--kinda text that says something smart
              Some--kinda text that says something smart Some--kinda text that
              says something smart and some more stuffs for youSome--kinda text
              that says something smart Some--kinda text that says something
              smart Some--kinda text that says something smart and some more
              stuffs for you
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleProject;
