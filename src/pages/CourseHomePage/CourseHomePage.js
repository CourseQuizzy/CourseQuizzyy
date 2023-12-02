import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const CourseHomePage = () => {
  return (
    <div className="flex flex-col flex-wrap bg_light_courseQuizzy">
      <Navbar />
      <div className="flex flex-col flex-wrap min-h-screen w-full ">
        <div
          id="header_courseHomePage"
          className="flex flex-row justify-between bg_courseQuizzy min-h-[256px] rounded-b-[6%] pt-14 px-20 text-white "
        >
          <div className="flex flex-col flex-wrap  w-[55%] gap-2 justify-between pb-10 pt-4 text-sm">
            <Link
              to="/catalogue"
              className="flex flex-wrap justify-start items-center gap-2"
            >
              <img
                src="/icons/keyboard_backspace.svg"
                className="w-4 h-5 "
                alt=""
              />
              <div>Back</div>
            </Link>
            <div className="flex flex-row justify-between items-start gap-8">
              <div className="text-2xl font-semibold ">
                The Complete 2023 Web Development Bootcamp
              </div>
              <img src="/icons/bookmark_white.svg" className="mt-1.5" alt="" />
            </div>
            <div className="flex flex-row  justify-between gap-8">
              <div>
                Become A Full-Stack Web Developer with just ONE course. HTML,
                CSS, Javascript, Node, React, MongoDB We3, and DApps
              </div>
              <div></div>
            </div>
            <div className="flex flex-row items-center ">
              <img src="/icons/stars.png" className="h-4 me-4" alt="" />
              <div className="me-1">(4.0)</div>
              <div>459 Reviews</div>
            </div>
            <div className="flex flex-row  justify-between items-center">
              <div className="flex flex-row flex-wrap justify-center items-center gap-4">
                <img src="/icons/3d_avatar_26.png" className="w-10" alt="" />
                <div>by Charlie Spring</div>
              </div>
              <Link
                to="/"
                className="text-white flex flex-wrap justify-center align-middle rounded-xl bg_mid_courseQuizzy p-2 px-6"
              >
                Enroll Me
              </Link>
            </div>
          </div>
          <div className="relative w-[40%]  flex justify-center">
            <div className="absolute xl:bottom-[-49px] min-[1100px]:bottom-[24px] lg:bottom-[42px] md:bottom-[60px]  bg-gray-400 md:w-[300px] lg:w-[350px] min-[1100px]:w-[400px] xl:w-[450px] md:h-[168.75px] lg:h-[196.875px] min-[1100px]:h-[225px] xl:h-[253.125px] rounded-2xl"></div>
          </div>
        </div>
        <div className="flex flex-row justify-between  px-20 ">
          <div className="flex flex-col w-[55%] flex-wrap gap-10 py-12">
            <div className="flex flex-col gap-5 ">
              <div className="text-2xl font-semibold">About Course</div>
              <div className="text-sm ">
                Become A Full-Stack Web Developer with just ONE course. HTML,
                CSS, Javascript, Node, React, MongoDB We3, and DApps Embark on
                an exciting journey to become a proficient Full-Stack Web
                Developer with our comprehensive and intensive course. In this
                single course, we'll take you through a transformative learning
                experience covering key web development technologies including
                HTML, CSS, JavaScript, Node.js, React, MongoDB, Web3, and DApps.
                Whether you're a beginner or have some experience in web
                development, this course is designed to equip you with the
                knowledge and skills required to excel in the dynamic world of
                web development.
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <div className="text-2xl font-semibold">What You'll Learn</div>
              <div className="flex flex-row flex-wrap justify-between rounded-2xl text-sm bg-white py-5 px-5  gap-y-4">
                <div className="flex flex-row items-center gap-4 w-[48%] ps-1">
                  <img src="/icons/done_all.svg" className="w-5" alt="" />
                  <div>HTML and CSS Fundamentals</div>
                </div>
                <div className="flex flex-row items-center gap-4 w-[48%] ps-1">
                  <img src="/icons/done_all.svg" className="w-5" alt="" />
                  <div>Web3 and DApps Development</div>
                </div>
                <div className="flex flex-row items-center gap-4 w-[48%] ps-1">
                  <img src="/icons/done_all.svg" className="w-5" alt="" />
                  <div>JavaScript Proficiency</div>
                </div>
                <div className="flex flex-row items-center gap-4 w-[48%] ps-1">
                  <img src="/icons/done_all.svg" className="w-5" alt="" />
                  <div>Real-World Projects</div>
                </div>
                <div className="flex flex-row items-center gap-4 w-[48%] ps-1">
                  <img src="/icons/done_all.svg" className="w-5" alt="" />
                  <div>Node.js for Back-End Development</div>
                </div>
                <div className="flex flex-row items-center gap-4 w-[48%] ps-1">
                  <img src="/icons/done_all.svg" className="w-5" alt="" />
                  <div>Expert Guidance</div>
                </div>
                <div className="flex flex-row items-center gap-4 w-[48%] ps-1">
                  <img src="/icons/done_all.svg" className="w-5" alt="" />
                  <div>React for Front-End Development</div>
                </div>
                <div className="flex flex-row items-center gap-4 w-[48%] ps-1">
                  <img src="/icons/done_all.svg" className="w-5" alt="" />
                  <div>Career Opportunities</div>
                </div>
                <div className="flex flex-row items-center gap-4 w-[48%] ps-1">
                  <img src="/icons/done_all.svg" className="w-5" alt="" />
                  <div>Database Management with MongoDB</div>
                </div>
                <div className="flex flex-row items-center gap-4 w-[48%] ps-1">
                  <img src="/icons/done_all.svg" className="w-5" alt="" />
                  <div>Lifetime Access</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[40%] flex-wrap gap-10 pb-12 pt-24">
            <div className="bg-white flex flex-row items-center justify-between rounded-2xl w-full h-20 text-sm px-10">
              <div className="flex flex-col items-center justify-center">
                <div className="font-semibold">850+</div>
                <div>Students</div>
              </div>
              <img src="/icons/Line_40.svg" className="w-1 h-8" alt="" />
              <div className="flex flex-col items-center justify-center">
                <div className="font-semibold">10+</div>
                <div>Quizzes</div>
              </div>
              <img src="/icons/Line_40.svg" className="w-1 h-8" alt="" />
              <div className="flex flex-col items-center justify-center">
                <div className="font-semibold">Beginner</div>
                <div>Level</div>
              </div>
              <img src="/icons/Line_40.svg" className="w-1 h-8" alt="" />
              <div className="flex flex-col items-center justify-center">
                <div className="font-semibold">12h 51m</div>
                <div>Total Time</div>
              </div>
            </div>
            <div className="w-full flex flex-row justify-evenly items-center courseQuizzy text-sm">
              <div className="flex flex-row justify-center items-center gap-2">
                <img src="/icons/translate.svg" className="w-7" alt="" />
                <div className="font-semibold">English, Indonesia</div>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  src="/icons/workspace_premium.svg"
                  className="w-5"
                  alt=""
                />
                <div className="font-semibold">Certificate of Completion</div>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-sm">
              <div className="text-2xl font-semibold">About The Instructor</div>
              <div className="flex flex-row justify-evenly items-center bg-white w-full h-52 rounded-2xl ">
                <img
                  src="/icons/3d_avatar_26.png"
                  className="xl:w-36 w-32"
                  alt=""
                />
                <div className="flex flex-col items-start gap-1">
                  <div className="flex flex-row gap-2">
                    <img src="/icons/Star.svg" className="w-5" alt="" />
                    <div>
                      <span className="font-semibold">4.8 </span>Instructor
                      Ratings
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <img src="/icons/edit.svg" className="w-5" alt="" />
                    <div>
                      <span className="font-semibold">12.931 </span>Reviews
                      Ratings
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <img src="/icons/person.svg" className="w-5" alt="" />
                    <div>
                      <span className="font-semibold">21.502 </span>Students
                      Ratings
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <img src="/icons/auto_stories.svg" className="w-5" alt="" />
                    <div>
                      <span className="font-semibold">23 </span>Course Ratings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHomePage;
