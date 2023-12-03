import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VideoPlayer from "./VideoPlayer";
import CourseSection from "./CourseSection/CourseSection";
import CourseDetails from "./CourseDetails";
import CourseQuiz from "./CourseQuiz/CourseQuiz";
const CourseContent = () => {
  const [selectedSubSection, setSelectedSubSection] = useState("1_3");
  const [displayQuiz, setDisplayQuiz] = useState(false);
  return (
    <div className="flex flex-col pt-14">
      <Navbar />
      <div className="flex flex-row min-h-screen w-full pt-3 pb-8">
        <div className="w-7/12 flex flex-col px-7">
          <VideoPlayer />
          <CourseSection
            idSection={1}
            subIds={[1, 2, 3, 4, 5]}
            subDone={[1, 2]}
            selectedSubSection={selectedSubSection}
            setSelectedSubSection={setSelectedSubSection}
            displayQuiz={displayQuiz}
            setDisplayQuiz={setDisplayQuiz}
          />
          <CourseSection
            idSection={2}
            subIds={[1, 2, 3]}
            selectedSubSection={selectedSubSection}
            setSelectedSubSection={setSelectedSubSection}
            displayQuiz={displayQuiz}
            setDisplayQuiz={setDisplayQuiz}
          />
          <CourseSection
            idSection={3}
            subIds={[1, 2, 3, 4]}
            selectedSubSection={selectedSubSection}
            setSelectedSubSection={setSelectedSubSection}
            displayQuiz={displayQuiz}
            setDisplayQuiz={setDisplayQuiz}
          />
        </div>
        <div className="w-5/12 flex flex-col">
          {displayQuiz ? (
            <CourseQuiz setDisplayQuiz={setDisplayQuiz} />
          ) : (
            <CourseDetails />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseContent;
