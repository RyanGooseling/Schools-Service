/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const SubratingRow = styled.div`
  padding-bottom: .25rem;
  margin-top: 20px;
`;
const SubratingScore = styled.span`
  float: left;
  padding-right: 1rem;
  width: 40px;
`;
const SubratingValue = styled.span`
  font-weight: 600;
  font-size: 1.125rem;
  color: #333;
`;
const OutOf = styled.span`
  font-size: .75rem;
`;
const SubratingType = styled.span`
  font-size: 1rem;
  color: #767676;
  float: left;
`;
const LastUpdated = styled.div`
  font-size: 12px;
  color: #767676;
  padding-bottom: 4px;
  padding-top: 12px;
  margin-top: 20px;
`;

const GreatSchoolsModalSection = ({school}) => (
  <div>
    <h4>GreatSchools Rating</h4>
    <SubratingRow>
      <SubratingScore>
        <SubratingValue>{school.rating.lowIncome}</SubratingValue>
        <OutOf>/10</OutOf>
      </SubratingScore>
      <SubratingType>Low Income</SubratingType>
    </SubratingRow>
    <SubratingRow>
      <SubratingScore>
        <SubratingValue>{school.rating.studentGrowth}</SubratingValue>
        <OutOf>/10</OutOf>
      </SubratingScore>
      <SubratingType>Student Growth</SubratingType>
    </SubratingRow>
    <SubratingRow>
      <SubratingScore>
        <SubratingValue>{school.rating.testScores}</SubratingValue>
        <OutOf>/10</OutOf>
      </SubratingScore>
      <SubratingType>Test Scores</SubratingType>
    </SubratingRow>
    <SubratingRow>
      <SubratingScore>
        <SubratingValue>{school.rating.equity}</SubratingValue>
        <OutOf>/10</OutOf>
      </SubratingScore>
      <SubratingType>Equity</SubratingType>
    </SubratingRow>
    <LastUpdated>Last Updated: {moment(school.rating.lastUpdated).format('ll')}</LastUpdated>
  </div>
);

export default GreatSchoolsModalSection;
