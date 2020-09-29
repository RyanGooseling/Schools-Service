import React from 'react';

const SchoolItem = (props) => {
  console.log(props);
  return (
    <div>
      { props.school.name }
    </div>
  );
};

export default SchoolItem;
