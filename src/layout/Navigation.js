import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/mssImage.jpg';
import MobileMenu from '../components/MobileMenu';

function Navigation (){
  const[openMenu, setOpenMenu] = useState(false);
  return(
<div>
<nav className="top-nav navbar navbar-expand-lg navbar-light top-bar">
<div className="container">
<ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <i className="fal fa-map-marker-alt pr-1"></i> HYDERABAD, MADHURANAGAR, +91 9550334946  
       </li>
      <li className="nav-item ps-2" >
       <i className="fal fa-clock pr-1 pl-3"></i>  Mon - sun 24HOURS Services
      </li>
    </ul>
    <Link to="/" className="btn btn-success">Get An Information</Link>
    </div>
</nav>

<nav className="main-nav navbar navbar-expand-lg navbar-light" style={{backgroundColor: "transparent"}}>
    <div className="container">
  <Link to="/" className="p-0 ps-0"><img src={Logo} width="80"  height='80' alt="Logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse1 navbar-collapse1" >
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item active">
        <Link to="/TeamMembers" className="nav-link">MSS TECH TEAM</Link>
      </li>
      <li className="nav-item">
        <Link to="/about-us" className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

<nav className="mobile-nav">
<div className="container d-flex align-items-center justify-content-between">
  <Link to="/" className="navbar-brand"><img src={Logo} width="180" alt="Logo" /></Link>
  {openMenu ? 
  <Link to="#" onClick={()=>{setOpenMenu(false)}}><i className="fal fa-times"></i></Link>:
  <Link to="#" onClick={()=>{setOpenMenu(true)}}><i className="fas fa-bars bars"></i></Link>
}
  </div>
</nav>
{openMenu ? <MobileMenu /> : '' }

</div>
  );
  }

export default Navigation;

