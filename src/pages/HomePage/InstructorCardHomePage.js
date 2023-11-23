import React from "react";

const InstructorCardHomePage = () => {
  return (
    <div className="bg_light_mid_courseQuizzy py-6 px-5 h-80 w-52 rounded-xl shadow-lg flex flex-col flex-wrap justify-center text-center gap-2 items-center courseQuizzy poppins">
      <div className="text-sm font-semibold">Web Development</div>
      <div className="radius-full py-2">
        <img src="icons/13.svg" className="w-28 h-28" alt="" />
      </div>
      <div className="text-sm font-semibold">Nick Nelson</div>
      <div className="text-xs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
        aspernatur.
      </div>
    </div>
  );
};

export default InstructorCardHomePage;
