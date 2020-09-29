import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Schools from './components/Schools.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: []
    };
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

  render() {
    return (
      <Schools schools={this.state.schools} />
    );
  }
}

// function App() {
//   const [schools, updateSchools] = useState([]);

//   useEffect(() => {
//     axios.get('/homes/5/schools')
//       .then((res) => {
//         console.log(res.data);
//         updateSchools(res.data);
//         res.end();
//       })
//       .catch((err) => {
//         console.log(`Error in GET: ${err}`);
//       });
//   });

//   return (
//     <h2>Rendered Index</h2>
//   );
// }

ReactDOM.render(<App />, document.getElementById('schools'));
