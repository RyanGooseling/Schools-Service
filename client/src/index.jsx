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
      showModal: false,
    };

    this.modalHandlerShow = this.modalHandlerShow.bind(this);
    this.modalHandlerHide = this.modalHandlerHide.bind(this);
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
    console.log('show modal');
    this.setState({
      showModal: true,
    });
  }

  modalHandlerHide() {
    console.log('show modal');
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <Schools schools={this.state.schools} modalHandlerShow={this.modalHandlerShow} modalHandlerHide={this.modalHandlerHide} showModal={this.state.showModal} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('schools'));
