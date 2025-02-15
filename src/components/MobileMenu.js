import React from 'react';
import { Link } from 'react-router-dom';


function MobileMenu(){
    return(
        <div>
            <div className="mobile-menu">
                <ul>
                <li><Link to="/"><i className="fas fa-home pr-2"></i> Home</Link></li>
                <li><Link to="/TeamMembers"><i className="fas fa-user pr-3"></i>Team Members</Link></li>
                <li><Link to="/about-us"><i className="fas fa-info pr-3"></i> About</Link></li>
                <li><Link to="/contact-us"><i className="fas fa-book-user pr-3"></i> Contact Us</Link></li>
                </ul>
            </div>

        
        </div>
    );
}

export default MobileMenu;