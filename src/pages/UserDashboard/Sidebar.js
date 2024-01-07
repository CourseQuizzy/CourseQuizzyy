import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-full justify-around py-3">
      <div className="flex flex-col w-full justify-center items-center">
        <img src="/icons/3d_avatar_13.png" className="w-32" alt="" />
        <div className="font-semibold text-xl mt-2">Nick Nelson</div>
        <div>Cybersecurity</div>
        <div>A Student, An Instructor</div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <button className="flex flex-row justify-start items-center shadow-md w-40 bg_mid_courseQuizzy rounded-xl py-2 ">
          <img src="/icons/dashboard.svg" className="w-5 mx-5 me-4" alt="" />
          <div className="text-white">Dashboard</div>
        </button>
        <button className="flex flex-row justify-start items-center  w-40 rounded-xl py-2">
          <img
            src="/icons/local_library.svg"
            className="w-5 mx-5 me-4"
            alt=""
          />
          <div>My Learning</div>
        </button>
        <button className="flex flex-row justify-start items-center  w-40 rounded-xl py-2">
          <img src="/icons/school.svg" className="w-5 mx-5 me-4" alt="" />
          <div>My Teaching</div>
        </button>
        <button className="flex flex-row justify-start items-center  w-40 rounded-xl py-2">
          <img src="/icons/bookmarks.svg" className="w-5 mx-5 me-4" alt="" />
          <div>Bookmark</div>
        </button>
      </div>
      <div className="w-full flex justify-center items-center mb-2">
        <button className="flex flex-row justify-center items-center py-2 px-16 bg-red-600 text-white rounded-xl">
          <div>Sign Out</div>
          <img src="/icons/logout.svg" className="w-5" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
