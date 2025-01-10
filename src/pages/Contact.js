import React, { forwardRef } from "react";
const Contact = forwardRef((props, ref) => {
  return (
    <section>
      <div className="position-relative" ref={ref}>
        <div className="bg-dark position-relative" style={{ height: "200px" }}>
          <button className="btn btn-sm border text-white mt-4 ms-4" disabled>
            CONTACT
          </button>
          <h1 className="text-white mt-5 ms-2 col-md-4">
            Join with us for a better future!
          </h1>
        </div>
        <div className="container-fluid bg-dark text-white contact-bg rounded-right position-relative z-1">
          <div className="d-flex row">
            <div className="d-flex ps-4 flex-column justify-content-center align-items-start text-start">
              <h1 className="display-4 mb-2">Contact Us</h1>
              <p className="lead mb-4">
                <strong>Phone:</strong> +91 9550334946
                <br />
                <strong>Email:</strong> ganeswararao.vasarla.44@gmail.com
              </p>
              <div className="d-flex justify-content-start gap-4">
                <a
                  href="https://www.linkedin.com/in/ganeswararaovasarla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-linkedin" style={{ fontSize: "40px" }} />
                </a>
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
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-facebook" style={{ fontSize: "40px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-50 end-0 pe-5 translate-middle-y z-3 d-none d-sm-block">
          <div className="card shadow-lg" style={{ width: "400px" }}>
            <div className="card-header border">
              <h5 className="text-center fw-bold">
                Schedule a Free Consultation
              </h5>
            </div>
            <div className="card-body">
              <label className="text-bold fw-bold mb-0">Name</label>
              <input type="text" className="form-control form-control-solid" />
              <label className="mt-2 fw-bold mb-0">Phone Number</label>
              <input type="number" className="form-control" />
              <label className="fw-bold mb-0 mt-2">E-mail</label>
              <input type="text" className="form-control" />
              <label className="fw-bold mb-0 mt-2">Comments</label>
              <textarea rows={3} className="form-control" />
            </div>
            <div className="card-footer d-flex justify-content-end">
              <button
                className="btn btn-sm btn-info fw-bold"
                style={{ width: "100px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="d-block d-sm-none">
          <div className="card shadow-lg">
            <div className="card-header border">
              <h5 className="text-center fw-bold">
                Schedule a Free Consultation
              </h5>
            </div>
            <div className="card-body">
              <label className="text-bold fw-bold mb-0">Name</label>
              <input type="text" className="form-control form-control-solid" />
              <label className="mt-2 fw-bold mb-0">Phone Number</label>
              <input type="number" className="form-control" />
              <label className="fw-bold mb-0 mt-2">E-mail</label>
              <input type="text" className="form-control" />
              <label className="fw-bold mb-0 mt-2">Comments</label>
              <textarea rows={3} className="form-control" />
            </div>
            <div className="card-footer d-flex justify-content-end">
              <button
                className="btn btn-sm btn-info fw-bold"
                style={{ width: "100px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
Contact.displayName = "Contact";
export default Contact;
