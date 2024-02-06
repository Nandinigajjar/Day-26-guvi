// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">All</Link></li>
            <li><Link to="/full-stack-development">Full Stack Development</Link></li>
            <li><Link to="/data-science">Data Science</Link></li>
            <li><Link to="/cyber-security">Cyber Security</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/full-stack-development" component={FullStackDevelopment} />
        <Route path="/data-science" component={DataScience} />
        <Route path="/cyber-security" component={CyberSecurity} />
        <Route path="/career" component={Career} />
      </div>
    </Router>
  );
}

export default App;
