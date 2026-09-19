import React from "react";
import SectionHeader from "./SectionHeader";
import Course from "./course";
import { coursesData } from "./data";

const Courses = () => {
  return (
    <section id="courses" className="courses">
      <div className="container">
        <SectionHeader
          title="Make online courses earned"
          description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        />
        <div className="courses-container">
          {coursesData.map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
