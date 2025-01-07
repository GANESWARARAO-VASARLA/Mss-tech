import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootsrap-overrides.css';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import{BrowserRouter as Router,Switch} from 'react-router-dom';
import TeamMembers from './pages/TeamMembers';

function App() {
  return (
        <div>
    <Router>

      <Switch>
      <Home exact path="/" />
      <About path="/about-us" component={About} />
      <Contact path="/contact-us" component={Contact} />
      <TeamMembers path="/teamMembers" component={TeamMembers} />
      </Switch>
    
    </Router>
    </div>
  );
}

export default App;
