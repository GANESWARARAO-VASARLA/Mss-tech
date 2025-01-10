import React from "react";
import { Link } from "react-router-dom";
import doc1 from "../assets/img/doc1.webp";
import doc2 from "../assets/img/rakesh.jpeg";
import doc3 from "../assets/img/Women-in.webp";
import teamImage from "../assets/img/itHAPPYSMILE.jpg";

function TeamMembers() {
  return (
      <main>
        <section
          style={{
            backgroundColor: "#f8f9fa", // Light background color
          }}
        >
          <div className="container d-flex flex-row">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 p-5">
                <h1
                  className="wcu-section-heading mb-4"
                  style={{ fontWeight: "bold" }}
                >
                  Meet Our Tech Team
                </h1>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  At <strong>MSS TECHNO</strong>, we are proud to have a
                  talented and dedicated tech team that drives innovation and
                  excellence in everything we do. Our team comprises skilled
                  professionals specializing in software development, cloud
                  technologies, UI/UX design, and AI-driven solutions.
                </p>
              </div>
              <div className="col-md-6 col-12 p-5">
                <img
                  src={teamImage}
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "300px",
                    objectFit: "cover",
                  }}
                  alt="Globe"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="container content">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <img
                    src={doc1}
                    alt=""
                    className="img-fluid"
                    style={{ height: "250px", width: "100%" }}
                    title=""
                    loading="lazy"
                  />
                  <p className="doctor-name">Prince Kiran Varma</p>
                  <p className="doctor-specialty">Documentation Engineer</p>
                  <Link to="/" className="btn btn-primary btn-block">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <img
                    src={doc2}
                    alt=""
                    title=""
                    className="img-fluid"
                    style={{ height: "250px", width: "100%" }}
                    loading="lazy"
                  />
                  <p className="doctor-name">Rakesh</p>
                  <p className="doctor-specialty">development, Marketing</p>
                  <Link to="/" className="btn btn-primary btn-block">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <img
                    src={doc3}
                    alt=""
                    title=""
                    className="img-fluid"
                    style={{ height: "250px", width: "100%" }}
                    loading="lazy"
                  />
                  <p className="doctor-name">Geetha</p>
                  <p className="doctor-specialty">Jr. Manager</p>
                  <Link to="/" className="btn btn-primary btn-block">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

export default TeamMembers;
