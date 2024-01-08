import React from "react";
import { Link } from "react-router-dom";
const ConfirmationPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition duration-300 ease-in-out">
      <div className="absolute w-fit flex flex-col flex-wrap justify-between items-center text-black bg-white rounded-2xl py-4 px-5 text-sm text-center gap-2 max-w-[400px]">
        <img src="/icons/fact_check.svg" className="w-8" alt="" />
        <div className="font-semibold">
          You are about to publish this course.
        </div>
        <div className="font-light">Are you sure?</div>
        <div className="flex flex-row justify-around items-center text-white font-light gap-5">
          <Link className="cursor-pointer rounded-2xl flex items-center justify-center bg-red-500 w-32 py-2">
            Cancel
          </Link>

          <Link
            to={"/my-teaching"}
            className="cursor-pointer rounded-2xl flex items-center justify-center bg_mid_courseQuizzy w-32 py-2"
          >
            Yes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
