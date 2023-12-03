import React, { useState } from "react";

const CourseSubSection = ({
  selected,
  done,
  subId,
  idSection,
  setSelectedSubSection,
}) => {
  const handleSelectSubSection = (subId) => {
    console.log(`${idSection}_${subId}`);
    setSelectedSubSection(`${idSection}_${subId}`);
  };
  if (selected) {
    return (
      <div
        onClick={() => handleSelectSubSection(subId)}
        className="flex flex-row items-center bg_light_mid_courseQuizzy py-2 px-4 gap-4"
      >
        {done ? (
          <img src="/icons/circle_filled.svg" className="w-4" alt="" />
        ) : (
          <img src="/icons/circle.svg" className="w-4" alt="" />
        )}
        <div>
          {subId} : Sub Section {subId}
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => handleSelectSubSection(subId)}
        className="flex flex-row items-center bg_light_courseQuizzy py-2 px-4 gap-4"
      >
        {done ? (
          <img src="/icons/circle_filled.svg" className="w-4" alt="" />
        ) : (
          <img src="/icons/circle.svg" className="w-4" alt="" />
        )}
        <div>
          {subId} : Sub Section {subId}
        </div>
      </div>
    );
  }
};

export default CourseSubSection;
