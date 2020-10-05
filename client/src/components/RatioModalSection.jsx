/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

const RatioModalSection = ({school}) => (
  <div className="ratio">
    <div>{school.ratio} Students/Teachers</div>
    <div><a href={school.schoolUrl} target="_blank" rel="noreferrer">{school.name}</a></div>
    <div><a href={school.districtUrl} target="_blank" rel="noreferrer">{school.name} School District</a></div>
  </div>
);

export default RatioModalSection;
