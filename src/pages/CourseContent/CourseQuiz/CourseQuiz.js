import React from "react";
import ComponentQuizMCQ from "./ComponentQuizMCQ";
import ComponentQuizEssay from "./ComponentQuizEssay";
const CourseQuiz = ({ setDisplayQuiz }) => {
  return (
    <div className="flex flex-col py-5 gap-5 pe-5">
      <div>
        <button
          onClick={() => setDisplayQuiz(false)}
          className="text-white flex flex-wrap justify-center align-middle rounded-full bg_mid_courseQuizzy p-1 px-5 text-sm"
        >
          Back
        </button>
      </div>
      <form className="flex flex-col gap-8">
        <ComponentQuizMCQ questionNumber={1} />
        <ComponentQuizMCQ questionNumber={2} />
        <ComponentQuizEssay questionNumber={3} />
        <div className="flex justify-end items-center">
          <button className="text-white flex flex-wrap justify-center align-middle rounded-full bg_mid_courseQuizzy p-1 px-8">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseQuiz;
