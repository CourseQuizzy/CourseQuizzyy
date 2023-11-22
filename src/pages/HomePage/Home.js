import React from "react";
import Navbar from "../../components/Navbar";
import CourseCardHomePage from "./CourseCardHomePage";
import InstructorCardHomePage from "./InstructorCardHomePage";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <div className="pt-20">
      <Navbar />
      <div className="flex flex-col flex-wrap justify-center content-center">
        <form
          action=""
          className="sm:w-6/12 h-8 flex flex-row flex-wrap justify-between content-center relative mt-4 mb-5"
        >
          <input
            class="placeholder:italic placeholder:text-slate-400 border border-gray-400 bg-light-gray rounded-xl w-full py-2 pl-4 pr-9 shadow-sm focus:outline-none focus:border-blue-950 focus:ring-blue-950  focus:ring-1 text-sm "
            placeholder="Apa yang ingin Anda pelajari?"
            type="text"
            name="search"
          />
          <button className="pe-3 absolute inset-y-0 right-0 flex items-center pl-2">
            <img src="icons/search.svg" alt="" className="w-6" />
          </button>
        </form>
      </div>
      <div className="flex flex-col flex-wrap w-full sm:px-20">
        <div className="mb-14 w-full h-72 bg-gray-300 rounded-xl"></div>
        <div className="mb-14 w-full">
          <div className="font-bold text-lg mb-4">Our Top Course</div>
          <div className="flex flex-row overflow-x-scroll pb-2 gap-5 justify-between items-center custom-x-scrollbar">
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
          </div>
        </div>
        <div className="mb-14 w-full">
          <div className="font-bold text-lg mb-4">Best To Cybersecurity</div>
          <div className="flex flex-row overflow-x-scroll pb-2 gap-5 justify-between items-center custom-x-scrollbar">
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
          </div>
        </div>
        <div className="mb-14 bg-courseQuizzy sm:h-36 w-full text-white rounded-xl p-5 flex flex-col flex-wrap justify-center items-center">
          <div className="font-semibold sm:text-2xl text-sm ">
            Unlock More Benefits by Becoming an Instructor!
          </div>
          <div className="text-sm sm:text-base">
            Join us today and reap the rewards of sharing your expertise.
          </div>
          <a
            href=""
            className="bg-light-courseQuizzy rounded-lg courseQuizzy font-semibold text-sm py-1.5 px-6 sm:my-8 max-sm:mt-3"
          >
            UPLOAD NOW
          </a>
        </div>
        <div className="mb-14">
          <div className="font-semibold text-lg mb-10 mt-5 text-center">
            Meet Our Best Instructors
          </div>
          <div className="flex flex-row flex-wrap gap-5 justify-between">
            <InstructorCardHomePage />
            <InstructorCardHomePage />
            <InstructorCardHomePage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
