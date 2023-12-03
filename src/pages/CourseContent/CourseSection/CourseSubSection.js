import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseSubSection = ({
  selected,
  done,
  subId,
  idSection,
  setSelectedSubSection,
  displayQuiz,
  setDisplayQuiz,
}) => {
  const handleSelectSubSection = (subId) => {
    console.log(`${idSection}_${subId}`);
    setSelectedSubSection(`${idSection}_${subId}`);
    setDisplayQuiz(false);
  };
  if (selected) {
    return (
      <div className="flex flex-row items-center justify-between bg_light_mid_courseQuizzy py-2 px-4 ">
        <div
          className="flex flex-row gap-4 cursor-pointer"
          onClick={() => handleSelectSubSection(subId)}
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
        {displayQuiz ? (
          <div className="text-white flex flex-wrap justify-center align-middle rounded-full bg-green-500 p-1 px-4 cursor-pointer">
            Quiz in Progress
          </div>
        ) : (
          <div
            onClick={() => setDisplayQuiz(true)}
            className="text-white flex flex-wrap justify-center align-middle rounded-full bg_mid_courseQuizzy p-1 px-4 cursor-pointer"
          >
            Go To Quiz
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex flex-row items-center bg_light_courseQuizzy py-3 px-4">
        <div
          className="flex flex-row gap-4 cursor-pointer"
          onClick={() => handleSelectSubSection(subId)}
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
      </div>
    );
  }
};

export default CourseSubSection;
