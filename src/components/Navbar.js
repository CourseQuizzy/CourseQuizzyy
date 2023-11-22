import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col flex-wrap fixed top-0 w-full shadow-lg backdrop-blur-xl bg-white/30 z-50">
      <div className="flex flex-row flex-wrap justify-between content-center sm:ps-14 sm:pe-8 py-2 px-5">
        <Link
          to="/"
          className="courseQuizzy font-semibold text-2xl flex flex-wrap justify-center align-middle"
        >
          CourseQuizzy
        </Link>
        <div className="flex flex-row flex-wrap justify-between content-center">
          <button className="me-3 sm:me-4">
            <img src="icons/sticky_note_2.svg" className="w-6 " alt="" />
          </button>
          <button className="me-3 sm:me-6">
            <img src="icons/notifications.svg" className="w-4 " alt="" />
          </button>
          <button className="me-3 sm:me-3 text-sm">Hello, user</button>
          <button className="">
            <img src="icons/profile_photo.svg" className="w-8" alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap max-sm:hidden content-center justify-center gap-8 text-xs font-semibold border-t border-gray-200 py-1.5">
        <a href="">Web Development</a>
        <a href="">Business Intelligence</a>
        <a href="">Software Development</a>
        <a href="">Machine Learning</a>
        <a href="">Cybersecurity</a>
        <a href="">All Courses</a>
      </div>
    </div>
  );
};

export default Navbar;
