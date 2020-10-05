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

  render() {
    return (
      <Schools schools={this.state.schools} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('schools'));
