import React from "react";
import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <div className="flex flex-col flex-wrap min-w-min w-64 overflow-hidden rounded-xl bg-white">
      <Link to={"/courses/1"}>
        <div className="bg-gray-200 rounded-b-xl h-32  w-full mb-3 flex flex-col flex-wrap justify-end items-end p-1.5">
          <div className="backdrop-blur-xl bg-white/30  rounded-full py-1.5 px-3 w-fit text-xs">
            14h 52m
          </div>
        </div>
      </Link>
      <div className="px-3">
        <Link to={"/courses/1"}>
          <div className="text-sm mb-2 font-bold">
            The Complete JavaScript Course 2023: From Zero to Expert!
          </div>
        </Link>
        <div className="flex flex-row flex-wrap justify-between content-center mb-2">
          <div className="flex flex-row flex-wrap gap-3">
            <img src="/icons/8.png" className="rounded-full w-9 " alt="" />
            <div className="text-xs text-gray-700">
              <div>by Tao Xu</div>
              <div>Software Engineer</div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-3">
            <div className="border-r border-r-gray-300"></div>
            <div className="text-xs text-gray-700 flex flex-col justify-center items-center">
              <div>2.198</div>
              <div>Students</div>
            </div>
          </div>
        </div>
        <Link to={"/courses/1"}>
          <div className="flex flex-row flex-wrap justify-between content-center mb-2">
            <div className="flex flex-row flex-wrap gap-2 justify-center items-center">
              <div className="text-xs text-gray-700">4.0</div>
              <img src="/icons/Stars.png" className="h-3" alt="" />
            </div>
            <img src="/icons/bookmark.svg" className="w-5 " alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
