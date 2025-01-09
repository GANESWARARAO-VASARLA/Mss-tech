import React, { forwardRef } from "react";
import doc1 from "../assets/img/doc1.webp";
import doc2 from "../assets/img/doc2.webp";
import doc3 from "../assets/img/doc3.webp";
import doc4 from "../assets/img/Women-in.webp";
import doc5 from "../assets/img/rakesh.jpeg";
import doc6 from "../assets/img/Women-in.webp";

const ClientTestimonials = forwardRef((props, ref) => {
  const testimonials = [
    {
      name: "Hari Krishna Aldandi",
      image: doc1,
      text: "Hari krishna Aldandi on securing the role of Java Developer at Digit secure private limited, Hyderabad, with an impressive annual salary of 4.5 LPA. Despite originating from a IT background, Hari krishna accumulated two years of experience as a Java Developer. MSSTechnogies played a pivotal role in shaping Hari krishna's success full career transition.",
    },
    {
      name: "Ravi Kumar",
      image: doc2,
      text: "Transitioned to a Data Scientist role at Tech Innovations Pvt. Ltd.",
    },
    {
      name: "Sita Rani",
      image: doc3,
      text: "Secured a Frontend Developer role at Web Solutions Corp.",
    },
    {
      name: "Amit Sharma",
      image: doc4,
      text: "Became a Full Stack Developer at Creative Studios.",
    },
    {
      name: "Pooja Gupta",
      image: doc5,
      text: "Shifted from marketing to Software Engineer at SecureTech.",
    },
    {
      name: "Vijay Singh",
      image: doc6,
      text: "Secured a Data Analyst role at DataWorx Inc. with 5.5 LPA.",
    },
    {
      name: "Vijay Singh",
      image: doc6,
      text: "Secured a Data Analyst role at DataWorx Inc. with 5.5 LPA.",
    },
  ];

  const chunkedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    if (testimonials.length > 3) {
      chunkedTestimonials.push(testimonials.slice(i, i + 3));
    } else {
      chunkedTestimonials.push(testimonials);
    }
  }
  return (
    <section>
      <div className="container" ref={ref}>
        <h1
          className="wcu-section-heading text-center mt-1 mb-4"
          style={{ fontWeight: "bold" }}
        >
          Client Testimonials
        </h1>

        {/* Bootstrap Carousel */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators">
            {chunkedTestimonials.map((_, index) => (
              <li
                key={index}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>

          <div className="carousel-inner">
            {chunkedTestimonials.map((chunk, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row mb-3 p-4">
                  {chunk.map((testimonial, idx) => (
                    <div className="col-md-4 col-12 mb-3" key={idx}>
                      <div
                        className="card shadow-sm"
                        style={{
                          height: "300px",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                            "0 0 20px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 0 10px rgba(0, 0, 0, 0.1)";
                        }}
                      >
                        <div className="card-body">
                          <div className="d-flex flex-row">
                            <div className="col-md-4">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="img-fluid rounded"
                                style={{ height: "70px", width: "100%" }}
                                loading="lazy"
                              />
                            </div>
                            <div className="col-md-8">
                              <h5>{testimonial.name}</h5>
                            </div>
                          </div>
                          <p className="mt-2">{testimonial.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={{ filter: "invert(100%)" }}
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>

          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{ filter: "invert(100%)" }}
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
});

ClientTestimonials.displayName = "ClientTestimonials";
export default ClientTestimonials;
