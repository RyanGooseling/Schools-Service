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
      modalState: false,
    };

    this.modalHandlerShow = this.modalHandlerShow.bind(this);
    this.modalHandlerHide = this.modalHandlerHide.bind(this);
    // this.handleModalSchool = this.handleModalSchool.bind(this);
  }

  componentDidMount() {
    axios.get('/homes/5/schools')
      .then((res) => {
        // console.log(res.data);
        this.setState({
          schools: res.data,
        });
        // res.end();
      })
      .catch((err) => {
        console.log(`Error in GET: ${err}`);
      });
  }

  modalHandlerShow() {
    this.setState({
      modalState: true,
    });
  }

  modalHandlerHide() {
    this.setState({
      modalState: false,
    });
  }

  // handleModalSchool() {
  //   this.setState({

  //   });
  // }

  render() {
    return (
      // <Schools schools={this.state.schools} modalHandlerShow={this.modalHandlerShow} modalHandlerHide={this.modalHandlerHide} modalState={this.state.modalState} />
      <Schools schools={this.state.schools} modalState={this.state.modalState} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('schools'));
