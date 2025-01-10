import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootsrap-overrides.css';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; // Keep this for Bootstrap JS

import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import TeamMembers from './pages/TeamMembers';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TeamMembers" element={<TeamMembers/>} />
        <Route path='/about-us' element={<About/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
