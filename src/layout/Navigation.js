import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/img/mssImage.jpg";
import MobileMenu from "../components/MobileMenu";

function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <nav
        className="main-nav navbar navbar-expand-lg navbar-light pt-0 pb-0"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="container">
          <Link to="/" className="p-0 m-0">
            <img
              src={Logo}
              className="p-0 m-0 rounded"
              width="80"
              height="80"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${isActive("/") ? "active" : ""}`}>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${isActive("/TeamMembers") ? "active" : ""}`}>
                <Link to="/TeamMembers" className="nav-link">
                  MSS TECH TEAM
                </Link>
              </li>
              <li className={`nav-item ${isActive("/about-us") ? "active" : ""}`}>
                <Link to="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-sm border mt-2 ms-1"
                  style={{ fontSize: "1.3rem" }} 
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav className="mobile-nav">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="navbar-brand">
            <img src={Logo} width="180" alt="Logo" />
          </Link>
          {openMenu ? (
            <Link to="#" onClick={() => setOpenMenu(false)}>
              <i className="fal fa-times"></i>
            </Link>
          ) : (
            <Link to="#" onClick={() => setOpenMenu(true)}>
              <i className="fas fa-bars bars"></i>
            </Link>
          )}
        </div>
      </nav>
      {openMenu && <MobileMenu />}
    </div>
  );
}

export default Navigation;
