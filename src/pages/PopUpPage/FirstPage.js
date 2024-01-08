import React from "react";
import { Link } from "react-router-dom";

const PopUpContent = () => {
  return (
    <div className="m-14 flex flex-col flex-wrap justify-center items-center">
      <div className="flex flex-col flex-wrap justify-center items-center w-7/12 shadow-2xl rounded-xl px-16 gap-5">
        <div className="lato font-bold mb-7">
          Lecture 2.1: Python Syntax and Variables
        </div>
        <div className="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-28 border-dashed border-2 rounded-lg border-gray-500 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <img src="/icons/movie.svg" className="w-9"></img>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Videos</span>
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div>
          <div className="lato">
            Click or drag and drop to start upload contents{" "}
          </div>
          <div className="flex flex-col flex-wrap justify-center items-center lato">
            You can add multiple files at a time
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 py-5">
          <div>Videos</div>
          <div className="rounded-xl flex flex-row bg_light_mid_courseQuizzy py-5 justify-evenly">
            <div className="rounded-xl bg-gray-300 w-[30%] h-[140px] flex justify-center items-center">
              38%
            </div>
            <div className="rounded-xl w-[55%] flex flex-col justify-between">
              <div>Title</div>
              <input
                className="rounded-xl bg-white w-full py-1 px-3"
                placeholder="Python Syntax and Variables"
              />
              <div className="text-end">
                <button className="rounded-xl bg-red-500 text-white px-3 py-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-xl flex flex-row bg_light_mid_courseQuizzy py-5 justify-evenly">
            <div className="rounded-xl bg-gray-300 w-[30%] h-[140px] flex justify-center items-center">
              38%
            </div>
            <div className="rounded-xl w-[55%] flex flex-col justify-between">
              <div>Title</div>
              <input
                className="rounded-xl bg-white w-full py-1 px-3"
                placeholder="Python Syntax and Variables"
              />
              <div className="text-end">
                <button className="rounded-xl bg-red-500 text-white px-3 py-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="text-end">
            <Link
              to={"/courses/create2"}
              className="rounded-xl bg_mid_courseQuizzy text-white px-6 py-1 my-2"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpContent;
