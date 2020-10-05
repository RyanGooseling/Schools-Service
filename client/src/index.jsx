/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Schools from './components/Schools.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
    };

    this.refreshSchools = this.refreshSchools.bind(this);
  }

  componentDidMount() {
    axios.get('/homes/5/schools')
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
      <Schools schools={this.state.schools} refreshSchools={this.refreshSchools} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('schools'));
