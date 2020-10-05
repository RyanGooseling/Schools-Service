/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
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
    this.checkForSchools = this.checkForSchools.bind(this);
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

  checkForSchools(schoolList) {
    if (!Array.isArray(schoolList) || schoolList.length === 0) {
      return <h3>No Schools found</h3>;
    } else {
      return (
        <div className="schools-table">
          {this.state.schools.map((school) => <SchoolItem school={school} key={school._id} refreshSchools={this.refreshSchools} />)}
        </div>
      );
    }
  }

  render() {
    return (
      this.checkForSchools(this.state.schools)

    );
  }
}

export default Schools;
