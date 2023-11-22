import React from "react";

const InstructorCardHomePage = () => {
  return (
    <div className="bg-light-courseQuizzy py-6 px-5 w-60 rounded-xl shadow-2xl flex flex-col flex-wrap justify-center gap-3 text-center content-center items-center courseQuizzy">
      <div className="font-bold">WEB DEVELOPMENT</div>
      <div className="radius-full">
        <img src="icons/profile_photo.svg" className="w-32 h-32" alt="" />
      </div>
      <div className="font-semibold">Full Name</div>
      <div className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
        aspernatur cupiditate vitae sunt commodi.
      </div>
    </div>
  );
};

export default InstructorCardHomePage;
