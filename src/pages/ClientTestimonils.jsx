import React, { forwardRef } from "react";
// import doc1 from "../assets/img/doc1.webp";
// import doc2 from "../assets/img/doc2.webp";
// import doc3 from "../assets/img/doc3.webp";
import doc4 from "../assets/img/Women-in.webp";
import doc5 from "../assets/img/rakesh.jpeg";
import doc6 from "../assets/img/Women-in.webp";

const ClientTestimonils = forwardRef((props, ref) => {
  const testimonials = [
    // {
    //   name: "Hari Krishna Aldandi",
    //   image: doc1,
    //   text: "Hari Krishna Aldandi on securing the role of Java Developer at Digit Secure Private Limited, Hyderabad, with an impressive annual salary of 4.5 LPA."
    // },
    // {
    //   name: "Ravi Kumar",
    //   image: doc2,
    //   text: "Ravi Kumar successfully transitioned to the role of Data Scientist at Tech Innovations Pvt. Ltd. With his strong background in mathematics and statistics..."
    // },
    // {
    //   name: "Sita Rani",
    //   image: doc3,
    //   text: "Sita Rani secured a role as a Frontend Developer at Web Solutions Corp. after undergoing training and guidance from MSSTechnologies."
    // },
    {
      name: "Amit Sharma",
      image: doc4,
      text: "Amit Sharma successfully transitioned into the role of Full Stack Developer at Creative Studios. With a strong background in React and Node.js...",
    },
    {
      name: "Pooja Gupta",
      image: doc5,
      text: "Pooja Gupta made a career shift from marketing to become a Software Engineer at SecureTech. MSSTechnologies provided the necessary tools...",
    },
    {
      name: "Vijay Singh",
      image: doc6,
      text: "Vijay Singh secured a Data Analyst position at DataWorx Inc. with a salary of 5.5 LPA, after a successful transition from a finance background.",
    },
  ];
  return (
    <section>
      <div className="container" ref={ref}>
        <h1
          className="wcu-section-heading text-center mt-1 mb-4"
          style={{ fontWeight: "bold" }}
        >
          Client Testimonials
        </h1>
        <div className="row mb-3">
          {testimonials.map((chunk, index) => (
            <div className="col-md-4 col-12 mb-3" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex flex-row">
                    <div className="col-md-4">
                      <img
                        src={chunk.image}
                        alt={chunk.name}
                        className="img-fluid"
                        style={{ height: "80px", width: "100%" }}
                        loading="lazy"
                      />
                    </div>
                    <div className="col-md-8">
                      <h5 className="ps-2">{chunk.name}</h5>
                    </div>
                  </div>
                  <p className="mt-2">{chunk.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
ClientTestimonils.displayName = 'ClientTestimonils';


export default ClientTestimonils;
