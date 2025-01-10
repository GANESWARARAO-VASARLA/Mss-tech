import React, { useRef } from "react";
import "./index.css";
import aboutImage from "../assets/img/mssImage.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import StatsBlock from "./StatsBlock";
import Ourservices from "./Ourservices";
import ClientTestimonils from "./ClientTestimonils";
import WhyChoose from "./WhyChoose";
import Upskilss from "./Upskilss";
import Contact from "./Contact";

function Home() {
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const handleTestimonialsClick = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Ref not set, cannot scroll to Client Testimonials.");
    }
  };

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Ref not set, cannot scroll to Contact.");
    }
  };

  return (
      <main>
        <section>
          <div className="jumbotron d-flex flex-column justify-content-center">
            <div className="container ">
              <h1>
                IT Solutions, <br />
                Teaching Courses and Consulting
              </h1>
              <div>
              <button
                  onClick={handleContactClick} className="btn btn-primary one btn-lg">
                  Schedule a Free Consultaion
                </button>
                <button
                  onClick={handleTestimonialsClick}
                  className="btn btn-primary two btn-lg"
                >
                  Overall Client Testimonials
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 p-5">
                <img
                  src={aboutImage}
                  className="img-fluid"
                  style={{
                    maxWidth: "300px",
                    maxHeight: "300px",
                    objectFit: "cover",
                  }}
                  alt="Globe"
                />
              </div>
              <div className="col-12 col-md-6 p-5">
                <h1
                  className="wcu-section-heading mb-4"
                  style={{ fontWeight: "bold" }}
                >
                  About Us
                </h1>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  At <strong>MSS TECHNO</strong>, we are dedicated to empowering
                  individuals and organizations through innovative solutions and
                  expert training. Founded with a vision to bridge the gap
                  between talent and opportunity, we specialize in providing
                  comprehensive job placement services, industry-relevant
                  courses, and cutting-edge software solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <StatsBlock />
        <Ourservices />
        <Upskilss />
        <WhyChoose />
        <ClientTestimonils ref={testimonialsRef} />
        <Contact ref={contactRef}/>
      </main>
  );
}

export default Home;
