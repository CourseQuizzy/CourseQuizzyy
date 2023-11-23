import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import CourseCardHomePage from "./CourseCardHomePage";
import InstructorCardHomePage from "./InstructorCardHomePage";

const Home = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <Navbar />
      <div className="flex flex-col flex-wrap justify-around items-center bg_light_mid_courseQuizzy pt-14 min-h-screen courseQuizzy ">
        <div className="flex flex-row flex-wrap justify-around ">
          <div className="w-1/4  flex flex-col flex-wrap justify-center">
            <div className="font-extrabold text-4xl">
              UPGRADE YOUR <div className="mid_courseQuizzy">SKILLS</div>{" "}
              <div>
                FOR
                <span className="mid_courseQuizzy"> FREE</span>
              </div>
            </div>
            <div>
              We are currently provides a premium online course without breaking
              the bank!
            </div>
          </div>
          <img src="icons/home_page_icon.svg" className="w-1/3" alt="" />
        </div>
        <div className="flex flex-row justify-around w-4/5">
          <Link
            to="/"
            className="flex flex-col flex-wrap items-center justify-center gap-2"
          >
            <img src="icons/shield_lock.svg" className="w-7" alt="" />
            <div className="font-bold text-sm">Cybersecurity</div>
          </Link>
          <Link
            to="/"
            className="flex flex-col flex-wrap items-center justify-center gap-2"
          >
            <img src="icons/stacked_line_chart.svg" className="w-7" alt="" />
            <div className="font-bold text-sm">Business Analyst</div>
          </Link>
          <Link
            to="/"
            className="flex flex-col flex-wrap items-center justify-center gap-2"
          >
            <img src="icons/architecture.svg" className="w-7" alt="" />
            <div className="font-bold text-sm">UI/UX Designer</div>
          </Link>
          <Link
            to="/"
            className="flex flex-col flex-wrap items-center justify-center gap-2"
          >
            <img src="icons/account_balance.svg" className="w-7" alt="" />
            <div className="font-bold text-sm">Web Development</div>
          </Link>
          <Link
            to="/"
            className="flex flex-col flex-wrap items-center justify-center gap-2"
          >
            <img src="icons/shield_lock.svg" className="w-7" alt="" />
            <div className="font-bold text-sm">Data Analyst</div>
          </Link>
          <Link
            to="/"
            className="flex flex-col flex-wrap items-center justify-center gap-2"
          >
            <img src="icons/bar_chart_4_bars.svg" className="w-7" alt="" />
            <div className="font-bold text-sm">Management</div>
          </Link>
        </div>
      </div>
      <div className="w-full px-20 py-20 flex flex-col gap-20">
        <div>
          <div className="font-extrabold text-center courseQuizzy text-xl mb-6">
            Our Top Course
          </div>
          <div className="flex flex-row overflow-x-scroll pb-4 px-0.5 gap-5 justify-between items-center custom-x-scrollbar">
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
        <div>
          <div className="font-extrabold text-center courseQuizzy text-xl mb-6">
            Best To Cybersecurity
          </div>
          <div className="flex flex-row overflow-x-scroll pb-4 px-0.5 gap-5 justify-between items-center custom-x-scrollbar">
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
            <CourseCardHomePage />
          </div>
        </div>
        <div className="mb-6 bg_light_mid_courseQuizzy courseQuizzy  w-full text-white rounded-xl px-5 py-6 flex flex-col flex-wrap justify-center items-center poppins my-16">
          <div className="font-semibold text-xl ">
            Unlock More Benefits by Becoming an Instructor!
          </div>
          <div className="text-xs font-bold lato">
            Join us today and reap the rewards of sharing your expertise.
          </div>
          <Link
            to="/"
            className=" rounded-2xl bg_mid_courseQuizzy text-white  text-xs py-1.5 px-6 mt-5 "
          >
            UPLOAD NOW
          </Link>
        </div>
        <div className="mb-14">
          <div className="font-semibold text-lg mb-10 mt-5 text-center">
            Meet Our Best Instructors
          </div>
          <div className="flex flex-row flex-wrap gap-5 justify-between">
            <InstructorCardHomePage />
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
