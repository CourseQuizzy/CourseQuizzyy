import React from "react";
import Navbar from "../../components/Navbar";

const AddCourseStep2 = () => {
  return (
    <div className="flex flex-col  justify-start bg_light_courseQuizzy ">
      <Navbar />
      <div className="flex flex-row lato justify-start mt-14 pt-5 mr-5 ml-5 min-h-screen ">
        <div className="p-5 w-96">
          <div className="font-semibold mb-5">Plan Your Course</div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <img src="/icons/icons-task-alt.svg" alt="check-icons" />
              <div className="mx-2">About The Course</div>
            </div>
            <div className="flex flex-row">
              <img src="/icons/icons-error.svg" alt="exclamation-icons" />
              <div className="mx-2 font-semibold">Curriculum</div>
            </div>
            <div className="flex flex-row">
              <img src="/icons/icons-circle.svg" alt="exclamation-icons" />
              <div className="mx-2">Wrap it up!</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 max-w-screen-lg">
          <div className="font-semibold mb-5">Step 2 - Curriculum</div>
          <div className="border-2 rounded-lg border-[#ACD3FF] p-5 mb-4 w-full">
            <div className="bg_light_mid_courseQuizzy rounded-lg p-5 mb-5">
              {/* Section 1 */}
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="font-semibold">Section 1:</div>
                  <div className="px-1">Introduction</div>
                </div>
                <div className="flex flex-row justify-between items-center rounded-xl mt-2 bg_light_courseQuizzy px-5 py-2">
                  <div>
                    <div className="flex flex-row">
                      <div className="font-semibold">Lecture 1:</div>
                      <div className="px-1">Introduction</div>
                    </div>
                  </div>
                  <div className="flex flex-row text-sm">
                    <button className="border-2 rounded-2xl px-2 py-1">
                      + Content
                    </button>
                    <button className="border-2 rounded-2xl px-2 py-1 ml-2">
                      + Quiz
                    </button>
                  </div>
                </div>
                <div>
                  <button className="border-2 border-[#ACD3FF]  rounded-2xl px-3 py-1 my-2 text-sm">
                    + Item
                  </button>
                </div>
              </div>
            </div>
            {/* Section 2 */}
            <div className="bg_light_mid_courseQuizzy rounded-lg p-5 mb-5">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="font-semibold">Section 2:</div>
                  <div className="px-1">Python and Syntax Variables</div>
                </div>
                {/* Lecture */}
                <div className="flex flex-row justify-between items-center rounded-xl mt-2 bg_light_courseQuizzy px-5 py-2">
                  <div>
                    <div className="flex flex-row">
                      <div className="font-semibold">Lecture 2.1:</div>
                      <div className="px-1">Python and Syntax Variables</div>
                    </div>
                  </div>
                  <div className="flex flex-row text-sm">
                    <button className="border-2 rounded-2xl px-2 py-1">
                      + Content
                    </button>
                  </div>
                </div>
                {/* Section's Question 1*/}
                <div className="flex flex-row justify-between items-center rounded-xl mt-2 bg_light_courseQuizzy px-5 py-2 ml-10">
                  <div className="flex flex-row items-center overflow-hidden">
                    <div className="font-semibold min-w-max">Question 1: </div>
                    <div className="mx-1 truncate">What is python?</div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center rounded-xl mt-2 bg_light_courseQuizzy px-5 py-2 ml-10">
                  <div className="flex flex-row items-center overflow-hidden">
                    <div className="font-semibold min-w-max">Question 2: </div>
                    <div className="mx-1 truncate">
                      What are the key differences between Python 2 and Python
                      3, and how does the transition from Python 2 to Python 3
                      impact code compatibility and development practices?
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center rounded-xl mt-2 bg_light_courseQuizzy px-5 py-2 ml-10">
                  <div className="flex flex-row items-center overflow-hidden">
                    <div className="font-semibold min-w-max">Question 3: </div>
                    <div className="mx-1 truncate">
                      How can you effectively handle exceptions in Python to
                      ensure robust error management in your code?
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center w-full">
                  <button className="my-2 border-2 rounded-2xl px-2 py-1 border-[#ACD3FF] text-sm">
                    + Question
                  </button>
                </div>
                {/* Section's Lecture 2 */}
                <div className="flex flex-row justify-between items-center rounded-xl mt-2 bg_light_courseQuizzy px-5 py-2">
                  <div>
                    <div className="flex flex-row">
                      <div className="font-semibold">Lecture 2.2:</div>
                      <div className="px-1">
                        Object Oriented Programming in Python
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row text-sm">
                    <button className="border-2 rounded-2xl px-2 py-1">
                      + Content
                    </button>
                    <button className="border-2 rounded-2xl px-2 py-1 ml-2">
                      + Quiz
                    </button>
                  </div>
                </div>
                <div>
                  <button className="border-2 border-[#ACD3FF]  rounded-2xl px-3 py-1 my-2 text-sm">
                    + Item
                  </button>
                </div>
              </div>
            </div>
            <div className="border-2 rounded-2xl border-[#ACD3FF] pl-4 pr-4 pt-2 pb-2 w-fit text-sm font-semibold">
              + Section
            </div>
          </div>

          <div className="flex justify-end items-center w-full">
            <div className="bg_mid_courseQuizzy text-white pl-5 pr-5 pt-2 pb-2 rounded-xl border-2 w-fit font-semibold">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCourseStep2;
