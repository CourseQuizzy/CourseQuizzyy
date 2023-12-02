import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row gap-1.5 flex-wrap w-full shadow-lg bg_courseQuizzy text-white text-sm h-12 justify-start content-center items-center px-20">
      <img src="/icons/copyright-white.svg" className="w-4 " alt="" />
      <span>CourseQuizzy 2023</span>
    </div>
  );
};

export default Footer;
