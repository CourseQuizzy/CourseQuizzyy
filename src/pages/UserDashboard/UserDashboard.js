import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "../../components/Navbar";
const UserDashboard = () => {
  return (
    <div className="flex flex-col bg_light_courseQuizzy">
      <Navbar />
      <div className="flex flex-row w-full min-h-screen pt-14">
        <div className="flex w-[27%]">
          <Sidebar />
        </div>
        <div className="flex flex-row w-[73%]">
          <div className="w-4/12 pe-6 flex flex-col justify-evenly ">
            <div className="bg-white h-[45%] flex rounded-xl p-5">
              <div className="text-xl">Personal Info</div>
            </div>
            <div className="bg-gray-300 h-[45%] flex rounded-xl p-5">
              <div className="text-xl">Statistic</div>
            </div>
          </div>
          <div className="w-8/12 pe-6 flex flex-col justify-evenly  ">
            <div className="bg_light_mid_courseQuizzy h-[45%] rounded-xl p-5 flex flex-col justify-between">
              <div className="text-xl">Learning</div>
              <div className="flex flex-row justify-evenly">
                <div className="bg-white w-40 h-28 flex flex-col rounded-xl p-4 justify-between">
                  <div className="text-xs">
                    <div>Completed </div>
                    <div>Course</div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center ">
                    <img src="/icons/fact_check.svg" className="w-10" alt="" />
                    <div className="text-3xl font-semibold pe-5">5</div>
                  </div>
                </div>
                <div className="bg-white w-40 h-28 flex flex-col rounded-xl p-4 justify-between">
                  <div className="text-xs">
                    <div>Enrolled </div>
                    <div>Course</div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center ">
                    <img src="/icons/ads_click.svg" className="w-10" alt="" />
                    <div className="text-3xl font-semibold pe-5">10</div>
                  </div>
                </div>
                <div className="bg-white w-40 h-28 flex flex-col rounded-xl p-4 justify-between">
                  <div className="text-xs">
                    <div>Total </div>
                    <div>Certificate</div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center ">
                    <img
                      src="/icons/workspace_premium.svg"
                      className="w-10"
                      alt=""
                    />
                    <div className="text-3xl font-semibold pe-5">10</div>
                  </div>
                </div>
              </div>
              <button className="mid_courseQuizzy text-sm text-end">
                View More
              </button>
            </div>
            <div className="bg_light_mid_courseQuizzy h-[45%] rounded-xl p-5 flex flex-col justify-between">
              <div className="text-xl">Teaching</div>
              <div className="flex flex-row justify-evenly">
                <div className="bg-white w-40 h-28 flex flex-col rounded-xl p-4 justify-between">
                  <div className="text-xs">
                    <div>Uploaded </div>
                    <div>Course</div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center ">
                    <img
                      src="/icons/cloud_upload.svg"
                      className="w-10"
                      alt=""
                    />
                    <div className="text-3xl font-semibold pe-5">5</div>
                  </div>
                </div>
                <div className="bg-white w-40 h-28 flex flex-col rounded-xl p-4 justify-between">
                  <div className="text-xs">
                    <div>Average </div>
                    <div>Ratings</div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center">
                    <img src="/icons/hotel_class.svg" className="w-10" alt="" />
                    <div className="text-2xl font-semibold pe-5">4.2</div>
                  </div>
                </div>
                <div className="bg-white w-40 h-28 flex flex-col rounded-xl p-4 justify-between">
                  <div className="text-xs">
                    <div>Total </div>
                    <div>Students</div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center ">
                    <img src="/icons/person_2.svg" className="w-10" alt="" />
                    <div className="text-2xl font-semibold pe-5">4591</div>
                  </div>
                </div>
              </div>
              <button className="mid_courseQuizzy text-sm text-end">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
