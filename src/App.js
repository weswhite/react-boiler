//creates the top level component where react-react router will sit and create a spa.
//This page will be consumed by main.js to bind the top level App component to index
//This will create a SPA

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const Home = () => <div><h1>Home</h1><Links /></div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;
const Links = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
    </nav>
  )
};

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
