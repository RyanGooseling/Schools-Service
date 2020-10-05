/* eslint-disable object-curly-spacing */
import React from 'react';
import axios from 'axios';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {stars, body} = this.state;
    const {school, refreshSchools, refreshReviews} = this.props;
    axios.post('/homes/5/schools/reviews', {
      id: school._id,
      score: Number(stars),
      body,
    })
      .then(() => {
        axios.get('/homes/5/schools')
          .then((schools) => {
            console.log('Schools Refreshed');
            refreshSchools(schools);
            refreshReviews();
          })
          .catch((err) => {
            console.log(`Error in GET: ${err}`);
          });
      })
      .catch((err) => {
        console.log(`POST error`);
        console.log(err);
      });
    // also need to re-render the sub-body sections
  }

// after successful POST
  // need to GET new schools from the api (make direct axios request)
    // then Update the schools page state with schools state
      // then
  //


  render() {
    const {stars, body} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="" type="text" name="stars" placeholder="How many stars?" onChange={this.handleChange} value={stars} />
        <br />
        <br />
        <textarea className="" name="body" placeholder="Please type your review here..." onChange={this.handleChange} value={body}></textarea>
        <br />
        <br />
        <button className="create-submit-button" type="submit">Submit Review</button>
      </form>
    );
  }
}

export default NewReview;
