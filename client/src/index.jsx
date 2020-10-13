/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Schools from './components/Schools.jsx';

const Font = styled.div`
  font-family: libreFranklin;
  color: #333;
`;

const SchoolsHeader = styled.h2`
  padding-left: 0;
  width: 100%;
  word-spacing: .125rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const SchoolService = () => (
  <Font>
    <Router>
      <SchoolsHeader>Nearby Schools</SchoolsHeader>
      <Route path="/homes/:id" component={Schools} />
    </Router>
  </Font>
);

ReactDOM.render(<SchoolService />, document.getElementById('schools'));
