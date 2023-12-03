import React, { useState } from "react";
import CourseSubSection from "./CourseSubSection";
const CourseSection = ({
  idSection,
  subIds,
  selectedSubSection,
  setSelectedSubSection,
  subDone,
}) => {
  const [expandedSection, setExpandedSection] = useState(false);
  const handleToggleSection = () => {
    if (expandedSection) {
      setExpandedSection(false);
    } else {
      setExpandedSection(true);
    }
  };
  const displaySubSection = (subId, index) => {
    if (parseInt(selectedSubSection.split("_")[0]) === idSection) {
      if (
        subDone &&
        subDone.includes(subId) &&
        subId === parseInt(selectedSubSection.split("_")[1])
      ) {
        return (
          <CourseSubSection
            key={index}
            idSection={idSection}
            subId={subId}
            selected={true}
            done={true}
            setSelectedSubSection={setSelectedSubSection}
          />
        );
      } else if (subDone && subDone.includes(subId)) {
        return (
          <CourseSubSection
            key={index}
            idSection={idSection}
            subId={subId}
            done={true}
            setSelectedSubSection={setSelectedSubSection}
          />
        );
      } else if (subId === parseInt(selectedSubSection.split("_")[1])) {
        return (
          <CourseSubSection
            key={index}
            idSection={idSection}
            subId={subId}
            selected={true}
            setSelectedSubSection={setSelectedSubSection}
          />
        );
      } else {
        return (
          <CourseSubSection
            key={index}
            idSection={idSection}
            subId={subId}
            setSelectedSubSection={setSelectedSubSection}
          />
        );
      }
    } else if (parseInt(selectedSubSection.split("_")[0]) !== idSection) {
      if (subDone && subDone.includes(subId)) {
        return (
          <CourseSubSection
            key={index}
            idSection={idSection}
            subId={subId}
            done={true}
            setSelectedSubSection={setSelectedSubSection}
          />
        );
      } else {
        return (
          <CourseSubSection
            key={index}
            idSection={idSection}
            subId={subId}
            setSelectedSubSection={setSelectedSubSection}
          />
        );
      }
    }
  };
  return (
    <div className="flex flex-col w-full  overflow-hidden text-sm mt-4">
      <div
        onClick={handleToggleSection}
        className="bg_mid_courseQuizzy rounded-t-2xl flex flex-row px-4 justify-between items-center text-white py-2"
      >
        <div>Section {idSection} : Lorem Ipsum</div>
        {expandedSection ? (
          <img src="/icons/vector_up.svg" className="w-[14px]" alt="" />
        ) : (
          <img src="/icons/vector_down.svg" className="w-[14px]" alt="" />
        )}
      </div>
      {expandedSection && (
        <div className="flex flex-col w-full rounded-b-2xl border-[1.5px] border_light_mid_courseQuizzy">
          {subIds.map((subId, index) => displaySubSection(subId, index))}
        </div>
      )}
    </div>
  );
};

export default CourseSection;
