import React from "react";

const ComponentQuizEssay = ({ questionNumber }) => {
  return (
    <div className="flex flex-col courseQuizzy gap-2">
      <div>
        <span className="font-bold">Question {questionNumber} : </span>Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. ?
      </div>
      <textarea
        type="textarea"
        className="flex flex-col gap-1 border-2  rounded-2xl py-2 px-3 min-h-[120px] "
      ></textarea>
    </div>
  );
};

export default ComponentQuizEssay;
