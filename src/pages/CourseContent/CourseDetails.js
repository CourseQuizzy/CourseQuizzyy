import React from "react";

const CourseDetails = () => {
  return (
    <div className="flex flex-col w-full  text-sm pe-5">
      <div className="flex flex-row justify-between px-5 items-center border-b courseQuizzy font-semibold ">
        <div className="border-b-2 border_courseQuizzy p-2">Overview</div>
        <div className="cursor-pointer p-2">Chat Lecturer</div>
        <div className="cursor-pointer p-2">Q&A</div>
        <div className="cursor-pointer p-2">Notes</div>
        <div className="cursor-pointer p-2">Review</div>
      </div>
      <div className="flex flex-col px-5 pt-5 pb-7 gap-2 border-b">
        <div className="text-lg font-semibold courseQuizzy ">
          About This Course
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="flex flex-col px-5 pt-5 pb-7 gap-2 border-b">
        <div className="text-lg font-semibold courseQuizzy ">Descripion</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
