/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Schools from './components/Schools.jsx';

const App = () => (
  <Router>
    <h2>Schools</h2>
    <Route path="/homes/:id" component={Schools} />
  </Router>
);

window.Schools = App;

ReactDOM.render(<App />, document.getElementById('schools'));
