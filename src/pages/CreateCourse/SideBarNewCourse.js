import React from "react";

const SideBarNewCourse = () => {
  return (
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
  );
};

export default SideBarNewCourse;
