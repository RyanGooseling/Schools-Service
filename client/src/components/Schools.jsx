/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SchoolItem from './SchoolItem.jsx';

const Schools = (props) => {
  return (
    <div className="schools-table">
      {props.schools.map((school) => <SchoolItem school={school} key={school._id} />)}
    </div>
  );
};

export default Schools;
