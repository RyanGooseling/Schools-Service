import React from 'react';
import SchoolItem from './SchoolItem.jsx';

const Schools = (props) => {
  // console.log(props.schools[0]._id);
  return (
    <div>
      {props.schools.map((school) => <SchoolItem school={school} key={school._id} />)}
    </div>
  );
};

export default Schools;
