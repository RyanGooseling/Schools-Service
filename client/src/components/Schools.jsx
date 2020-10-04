/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SchoolItem from './SchoolItem.jsx';

const Schools = (props) => {
  // console.log(props.schools[0]._id);
  return (
    <div className="schools-table">
      {props.schools.map((school) => <SchoolItem school={school} key={school._id} modalState={props.modalState} />)}
      {/* {props.schools.map((school) => <SchoolItem school={school} key={school._id} modalHandlerShow={props.modalHandlerShow} modalHandlerHide={props.modalHandlerHide} modalState={props.modalState} />)} */}
    </div>
  );
};

export default Schools;
