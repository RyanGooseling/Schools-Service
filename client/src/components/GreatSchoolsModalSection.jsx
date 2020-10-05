/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';

const GreatSchoolsModalSection = ({school}) => (
  <div className="great-schools-section">
    <h4>GreatSchools Rating</h4>
    <div className="subrating-row">
      <span className="subrating-score">
        <span className="subrating-value">{school.rating.lowIncome}</span>
        <span className="out-of">/10</span>
      </span>
      <span className="subrating-type">Low Income</span>
    </div>
    <div className="subrating-row">
      <span className="subrating-score">
        <span className="subrating-value">{school.rating.studentGrowth}</span>
        <span className="out-of">/10</span>
      </span>
      <span className="subrating-type">Student Growth</span>
    </div>
    <div className="subrating-row">
      <span className="subrating-score">
        <span className="subrating-value">{school.rating.testScores}</span>
        <span className="out-of">/10</span>
      </span>
      <span className="subrating-type">Test Scores</span>
    </div>
    <div className="subrating-row">
      <span className="subrating-score">
        <span className="subrating-value">{school.rating.equity}</span>
        <span className="out-of">/10</span>
      </span>
      <span className="subrating-type">Equity</span>
    </div>
    <div className="last-updated">Last Updated: {moment(school.rating.lastUpdated).format('ll')}</div>
  </div>
);

export default GreatSchoolsModalSection;
