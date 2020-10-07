/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Schools from './components/Schools.jsx';

const SchoolService = () => (
  <Router>
    <h2>Schools</h2>
    <Route path="/homes/:id" component={Schools} />
  </Router>
);

// window.SchoolsService = SchoolService;

ReactDOM.render(<SchoolService />, document.getElementById('schools'));
