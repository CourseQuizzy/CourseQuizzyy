import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = ({logined}) => {
  const inputRef = useRef(null);
  const expandSearchBar = () => {
    const form = document.querySelector("#searchBarForm");
    form.classList.toggle("flex");
    form.classList.toggle("hidden");
    const buttonExpander = document.querySelector("#expandButton");
    if (form.classList.contains("flex")) {
      inputRef.current.focus();
      buttonExpander.classList.add("hidden");
    } else if (form.classList.contains("hidden")) {
      buttonExpander.classList.remove("hidden");
    }

    // console.log(form.classList)
  };
  return (
    <div className="flex flex-row flex-wrap justify-between items-center fixed top-0  w-full  backdrop-blur-xl bg_courseQuizzy  z-50 h-14 sm:ps-20 sm:pe-8 py-2 px-5 poppins text-xs">
      <Link
        to="/"
        className="text-white font-semibold text-2xl flex flex-wrap justify-center align-middle "
      >
        CourseQuizzy
      </Link>
      <div className="text-white  flex flex-row flex-wrap justify-between items-center gap-8">
        <Link to="/" className=" flex flex-wrap justify-center align-middle">
          Home
        </Link>
        <Link to="/" className=" flex flex-wrap justify-center align-middle">
          Courses
        </Link>
        <Link to="/" className=" flex flex-wrap justify-center align-middle">
          About Us
        </Link>
        <Link to="/" className=" flex flex-wrap justify-center align-middle">
          Contact
        </Link>
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          <form
            id="searchBarForm"
            action="/catalogue"
            className="hidden flex-row flex-wrap items-center justify-center gap-5"
          >
            <input
              className="text-black h-7 w-52 px-2 rounded-xl  focus:outline-none"
              type="text"
              ref={inputRef}
              onBlur={expandSearchBar}
            />
            <button className="submit">
              <img src="/icons/search.svg" className="w-5 " alt="" />
            </button>
          </form>
          <button id="expandButton" onClick={expandSearchBar} className="">
            <img src="/icons/search.svg" className="w-5" alt="" />
          </button>
          <button className="">
            <img src="/icons/strip.svg" className="h-6" alt="" />
          </button>
          {logined ? <>
            <Link to="/" className="flex flex-row items-center gap-4">
            Nick Nelson
            <img src="3d_avatar_13.png" className="w-7" alt="" />
            </Link>
        </> : 
        <><Link
            to="/"
            className="text-white flex flex-wrap justify-center align-middle"
          >
            Login
          </Link>
          <Link
            to="/"
            className="text-white flex flex-wrap justify-center align-middle rounded-xl bg_mid_courseQuizzy p-1 px-4"
          >
            Register
          </Link></>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
