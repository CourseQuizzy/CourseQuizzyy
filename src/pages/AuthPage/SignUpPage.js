import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="poppins courseQuizzy font-semibold text-2xl mt-14 pt-5">
          CourseQuizzy
        </div>
        <div className=" mt-5 mb-10 p-3 w-64 bg-white shadow-[0px_0px_8px_-1px_rgba(0,0,0,0.3)] rounded-md">
          <div className="font-semibold courseQuizzy poppins text-lg">
            Sign Up
          </div>
          <div>
            <form>
              {/* Username */}
              <div className="font-medium text-xs lato mt-5 mb-1 ml-0.5">
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <input
                  className="w-full flex justify-center items-center lato border-2 py-2 px-3 mb-3 rounded-md text-xs"
                  id="username"
                  type="text"
                  placeholder="Username"
                  required
                />
              </div>
              {/* Email */}
              <div className="font-medium text-xs lato mb-1 ml-0.5">
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  className="w-full flex justify-center items-center lato border-2 py-2 px-3 mb-3 rounded-md text-xs"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              {/* Password */}
              <div className="font-medium text-xs lato mb-1 ml-0.5">
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input
                  className="w-full flex justify-center items-center lato border-2 py-2 px-3 mb-3 rounded-md text-xs"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="w-full flex justify-center items-center poppins mb-2 bg_mid_courseQuizzy p-1 px-4 text-white font-semibold rounded-md text-xs">
                <Link to={"/dashboard"} type="submit">
                  SIGN UP
                </Link>
              </div>
            </form>
            <div className="flex justify-center items-center font-regular lato text-xs mb-2">
              Or continue with
            </div>
            <div className="">
              <Link
                to=""
                className="border-2 flex flex-wrap poppins mb-2 p-1 px-4 text-black font-semibold justify-center rounded-md text-xs"
              >
                <img
                  src="/icons/icons-google.svg"
                  alt="login-with-google"
                  className="h-4 w-4 mx-2"
                />
                <div>Google</div>
              </Link>
            </div>
            <div>
              <Link
                to=""
                className="border-2 flex flex-wrap poppins mb-2 p-1 px-4 text-black font-semibold justify-center rounded-md text-xs"
              >
                <img
                  src="/icons/icons-facebook.svg"
                  alt="login-with-facebook"
                  className="h-4 w-4 mx-2"
                />
                <div>Facebook</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
