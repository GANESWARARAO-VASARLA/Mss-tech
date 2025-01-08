import React from 'react'
import globeImage from "../assets/img/vector-globe-icon.jpg";
import webImage from "../assets/img/Web Maintenance.png";
function WhyChoose() {
  return (
    <section>
    <div className="wcu-section mt-5 pb-5" id="wcuSection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="wcu-section-heading">Why Choose Us?</h1>
            <p className="wcu-section-description">
              We use top-rated systems and advanced tools to deliver
              exceptional service. Our key features include
            </p>
          </div>
          <div className="col-12 col-md-4">
            <div className="wcu-card p-3 mb-3">
              <img src={globeImage} className="wcu-card-image" />
              <h1 className="wcu-card-title mt-3">We are global.</h1>
              <p className="wcu-card-description">
                No matter where you are, we have got you covered.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="wcu-card p-3 mb-3">
              <img src={webImage} className="wcu-card-image" />
              <h1 className="wcu-card-title mt-3">
                We value our clients.
              </h1>
              <p className="wcu-card-description">
                Virtual assistance. Talk to us about any concerns, 24/7.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="wcu-card p-3 mb-3">
              <img src={webImage} className="wcu-card-image" />
              <h1 className="wcu-card-title mt-3">
                We use top-rate systems & advanced tools
              </h1>
              <p className="wcu-card-description">
                Our company uses top-rated systems and advanced UI and AI
                tools to enhance efficiency and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhyChoose