import React from "react";
import aboutImage from "../assets/img/TheoryMaster-Learning.png";
import LeadingCourses from "./LeadingCourses";
function Upskilss() {
  return (
    <section
      style={{
        backgroundColor: "#f8f9fa",
      }}
    >
      <h1
        className="wcu-section-heading text-center pt-4 mt-4 mb-5"
        style={{ fontWeight: "bold" }}
      >
        Upskill with Industry-Leading Courses
      </h1>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <img
              src={aboutImage}
              className="img-fluid rounded"
              style={{
                maxHeight: "200px",
              }}
              alt="Globe"
            />
          </div>
          <div className="col-12 col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Gain practical skills in UI development (Angular, React), DevOps
              (AWS), Python, Data Science, and Data Analysis. Our expert-led
              courses prepare you for success in a tech-driven job market
            </p>
          </div>
        </div>
      </div>
              <LeadingCourses/>
    </section>
  );
}

export default Upskilss;
