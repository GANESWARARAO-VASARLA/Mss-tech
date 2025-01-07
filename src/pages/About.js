import React from 'react';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import aboutImage from "../assets/img/mssImage.jpg";
function About(){
    return(
        <div>
            
            <Navigation />
            <section  style={{
    backgroundColor: "#f8f9fa", // Light background color
  }}>
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

            <Footer />
        </div>
    );
}

export default About;