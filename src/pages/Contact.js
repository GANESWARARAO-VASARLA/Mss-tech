import React from 'react';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';

function Contact(){
    return(
        <div>
            
            <Navigation />
            <main>
            <section>
  <div className="contact-page">
    <div
      className="container-fluid bg-dark text-white py-5 ps-5 contact-bg"
    >
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

export default Contact;