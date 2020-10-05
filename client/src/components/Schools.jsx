/* eslint-disable react/destructuring-assignment */
// import React from 'react';
// import SchoolItem from './SchoolItem.jsx';

// const Schools = (props) => {
//   return (
//     <div className="schools-table">
//       {props.schools.map((school) => <SchoolItem school={school} key={school._id} refreshSchools={props.refreshSchools}/>)}
//     </div>
//   );
// };

// export default Schools;





/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import SchoolItem from './SchoolItem.jsx';

class Schools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
    };

    this.refreshSchools = this.refreshSchools.bind(this);
  }

  componentDidMount() {
    axios.get(`/homes/${this.props.match.params.id}/schools`)
      .then((res) => {
        this.setState({
          schools: res.data,
        });
      })
      .catch((err) => {
        console.log(`Error in GET: ${err}`);
      });
  }

  refreshSchools(newSchools) {
    this.setState({
      schools: newSchools.data,
    });
  }

  render() {
    return (
      <div className="schools-table">
        {this.state.schools.map((school) => <SchoolItem school={school} key={school._id} refreshSchools={this.refreshSchools} />)}
      </div>
    );
  }
}

export default Schools;
