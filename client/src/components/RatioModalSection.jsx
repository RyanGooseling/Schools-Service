/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Ratio = styled.div`
  padding-bottom: 4px;
  line-height: 24px;
`;

const RatioModalSection = ({school}) => (
  <Ratio>
    <div>{school.ratio} Students/Teachers</div>
    <div><a href={school.schoolUrl} target="_blank" rel="noreferrer">{school.name}</a></div>
    <div><a href={school.districtUrl} target="_blank" rel="noreferrer">{school.name} School District</a></div>
  </Ratio>
);

export default RatioModalSection;
