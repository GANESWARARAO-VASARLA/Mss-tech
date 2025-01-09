import React, { useRef } from "react";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import "./index.css";
import aboutImage from "../assets/img/mssImage.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import StatsBlock from "./StatsBlock";
import Ourservices from "./Ourservices";
import ClientTestimonils from "./ClientTestimonils";
import WhyChoose from "./WhyChoose";
import Upskilss from "./Upskilss";

function Home() {
  const clientTestimonialsRef = useRef(null);

  const handleTestimonialsClick = () => {
    if (clientTestimonialsRef.current) {
      clientTestimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Ref not set, cannot scroll to Client Testimonials.");
    }
  };

  return (
    <div>
      <Navigation />
      <main >
        <section>
          <div className="jumbotron d-flex flex-column justify-content-center">
            <div className="container ">
              <h1>
                IT Solutions, <br />
                Teaching Courses and Consulting
              </h1>
              <div>
                <Link to="/" className="btn btn-primary one btn-lg">
                  Schedule a Free Consultaion
                </Link>
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
        <Upskilss/>
        <WhyChoose />
        <ClientTestimonils ref={clientTestimonialsRef} />
        <section>
          <div className="contact-page">
            <div className="container-fluid bg-dark text-white py-5 ps-5 contact-bg">
              <div className="row justify-content-start">
                <div className="col-12 col-md-6 text-left">
                  <h1 className="display-4 mb-4">Contact Us</h1>
                  <p className="lead mb-4">
                    <strong>Phone:</strong> +91 9550334946
                    <br />
                    <strong>Email:</strong> ganeswararao.vasarla.44@gmail.com
                  </p>
                  <div className="d-flex justify-content-start gap-4">
                    <div>
                      <a
                        href="https://www.linkedin.com/in/ganeswararaovasarla/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <i
                          className="fab fa-linkedin"
                          style={{ fontSize: "40px" }}
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.instagram.com/ganesh_vasarla/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <i
                          className="fab fa-instagram"
                          style={{ fontSize: "40px" }}
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <i
                          className="fab fa-facebook"
                          style={{ fontSize: "40px" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
