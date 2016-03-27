//creates the top level component where react-react router will sit and create a spa.
//This page will be consumed by main.js to bind the top level App component to index
//This will create a SPA

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/common/Home';
import About from './components/common/About';
import Contact from './components/common/Contact';

const App = () => {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
    </Router>
  )
};

export default App;
