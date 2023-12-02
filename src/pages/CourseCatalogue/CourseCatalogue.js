import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import CourseCard from "./CourseCard";

const CourseCatalogue = () => {
  return (
    <div className="flex flex-col flex-wrap bg_light_courseQuizzy">
      <Navbar />
      <div className="flex flex-col flex-wrap min-h-screen w-full">
        <div className="flex flex-row flex-wrap w-full pt-20  justify-evenly">
          <div className="w-60 h-10 font-bold text-center text-2xl">
            Find Courses
          </div>
          <div className="w-9/12 h-10 flex flex-row justify-between  items-center gap-6">
            <div className="w-8/12 h-10 rounded-xl px-5 flex flex-row flex-wrap justify-between bg-white items-center text-sm">
              <div>
                We've found <span className="mid_courseQuizzy">213</span>{" "}
                courses for you
              </div>
              <div className="flex flex-row flex-wrap justify-between  items-center gap-3">
                <div>Sort by:</div>
                <div className="rounded-full border border_light_courseQuizzy flex flex-row flex-wrap justify-between items-center w-28 h-7 ps-2 pe-1">
                  <div>Default</div>
                  <img src="/icons/arrow_drop_down.svg" alt="" />
                </div>
              </div>
            </div>
            <form
              action=""
              className="flex-grow flex flex-row  justify-between items-center gap-2"
            >
              <input
                type="text"
                className=" h-10 px-4 rounded-xl flex flex-grow"
                placeholder="Search"
              />
              <button className="bg_mid_courseQuizzy w-10 h-10 rounded-xl flex flex-wrap justify-center items-center">
                <img src="/icons/search.svg" className="w-5" alt="" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-row justify-evenly w-full pt-4">
          <div className="w-60 ">
            <FilterBar />
          </div>
          <div className="w-9/12 flex flex-col ">
            <div className="flex flex-row justify-start gap-3 mb-4">
              <div className="flex flex-row justify-between items-center text-xs rounded-full border border_light_courseQuizzy h-6 ps-3 pe-2 gap-2">
                <div>Category 1</div>
                <button>
                  <img src="/icons/close.svg" className="w-4" alt="" />
                </button>
              </div>
              <div className="flex flex-row justify-between items-center text-xs rounded-full border border_light_courseQuizzy h-6  ps-3 pe-2 gap-2">
                <div>Tao Xu</div>
                <button>
                  <img src="/icons/close.svg" className="w-4" alt="" />
                </button>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-evenly gap-5 gap-y-8 pb-7">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseCatalogue;
