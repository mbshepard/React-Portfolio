import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './components/Welcome/Welcome'
import Portfolio from './components/Main/Portfolio';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Route exact path="/React-Portfolio" component={Welcome}></Route>
        <Route path ="/portfolio" component={Portfolio}></Route>
        <Route path ="/contact" component={Contact}></Route>
      </div>
    </Router>
    </div>
  );
}

export default App;

