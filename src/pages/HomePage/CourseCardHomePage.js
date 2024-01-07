import React from "react";

const CourseCardHomePage = () => {
  return (
    <div className="flex flex-col flex-wrap min-w-min w-52  overflow-hidden rounded-xl shadow-md">
      <div className="bg-gray-300  h-32  w-52 mb-3"></div>
      <div className="px-3">
        <div className="text-sm mb-2">
          Full Stack Development Using Django and React
        </div>
        <div className="flex flex-row flex-wrap justify-between content-center mb-2">
          <div className="text-xs text-gray-700">by Reza Arap</div>
          <img src="/icons/bookmark.svg" className="w-5 " alt="" />
        </div>
      </div>
    </div>
  );
};

export default CourseCardHomePage;
