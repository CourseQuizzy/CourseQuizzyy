import React from "react";
import Navbar from "../../components/Navbar";


const AddCourseStep1 = () => {
  return (
    <div className="flex flex-col flex-wrap lato bg_light_courseQuizzy">
      <Navbar />
      <div className="flex flex-row justify-start mt-14 pt-5 mr-5 ml-5 min-h-screen">
        <div className="p-5 w-2/5">
          <div className="font-semibold mb-5">Plan Your Course</div>
          <div className="">
            <div className="">
              <div className="flex flex-row">
                <img src="/icons/icons-error.svg" alt="check-icons" />
                <div className="mx-2 font-semibold">About The Course</div>
              </div>
              <div className="flex flex-row">
                <img src="/icons/icons-circle.svg" alt="exclamation-icons" />
                <div className="mx-2">Curriculum</div>
              </div>
              <div className="flex flex-row">
                <img src="/icons/icons-circle.svg" alt="exclamation-icons" />
                <div className="mx-2">Wrap it up!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 w-full">
          <div className="font-semibold mb-5">Step 1 - About Course</div>
          <div className="border-2 rounded-xl border-[#ACD3FF] p-5 mb-4">
            <div className="bg_light_mid_courseQuizzy rounded-xl p-5 mb-5">
              {/* Title */}
              <div className="flex flex-col">
                <label>Title</label>
                <input
                  className="rounded-xl mt-2 bg_light_courseQuizzy p-2"
                  type="text"
                  placeholder="Insert Title"
                />
              </div>
            </div>
            {/* Description */}
            <div className="bg_light_mid_courseQuizzy rounded-xl p-5 mb-5">
              <div className="flex flex-col">
                <label>Description</label>
                <textarea
                  className="rounded-xl mt-2 bg_light_courseQuizzy p-2"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Insert Description"
                ></textarea>
              </div>
            </div>
            {/* What to be learn */}
            <div className="font-semibold mb-5">
              What the Student Will Learn
            </div>
            <div>
              <div className="bg_light_mid_courseQuizzy rounded-xl p-4 mb-5">
                <div className="flex flex-col">
                  <input
                    className="rounded-xl mt-2 bg_light_courseQuizzy p-2"
                    type="text"
                    placeholder="Insert what else student will learn"
                  />
                  <input
                    className="rounded-xl mt-2 bg_light_courseQuizzy p-2"
                    type="text"
                    placeholder="Insert what else student will learn"
                  />
                  <input
                    className="rounded-xl mt-2 bg_light_courseQuizzy p-2"
                    type="text"
                    placeholder="Insert what else student will learn"
                  />
                </div>
                <div className="my-2 border-2 rounded-2xl border-[#ACD3FF] pl-4 pr-4 pt-2 pb-2 w-fit text-sm">
                  Add Item
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center w-full">
            <button className="bg_mid_courseQuizzy text-white pl-5 pr-5 pt-2 pb-2 rounded-xl border-2 w-fit font-semibold">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourseStep1;
