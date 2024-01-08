import React from "react";

const ComponentQuizMCQ = ({ questionNumber }) => {
  return (
    <div className="flex flex-col courseQuizzy gap-2">
      <div>
        <span className="font-bold">Question {questionNumber} : </span>Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. ?
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-3 items-center">
          <input
            type="radio"
            name={`question_${questionNumber}`}
            id={`question_${questionNumber}_1`}
          />
          <label for={`question_${questionNumber}_1`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </label>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <input
            type="radio"
            name={`question_${questionNumber}`}
            id={`question_${questionNumber}_2`}
          />
          <label for={`question_${questionNumber}_2`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </label>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <input
            type="radio"
            name={`question_${questionNumber}`}
            id={`question_${questionNumber}_3`}
          />
          <label for={`question_${questionNumber}_3`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </label>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <input
            type="radio"
            name={`question_${questionNumber}`}
            id={`question_${questionNumber}_4`}
          />
          <label for={`question_${questionNumber}_4`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </label>
        </div>
      </div>
    </div>
  );
};

export default ComponentQuizMCQ;
