/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
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
    const {
      school,
      refreshSchools,
      refreshReviews,
    } = this.props;
    axios.post(`http://localhost:3002/homes/${school.property_id}/schools/reviews`, {
      id: school._id,
      score: Number(stars),
      body,
    })
      .then(() => {
        axios.get(`/homes/${school.property_id}/schools`)
          .then((schools) => {
            refreshSchools(schools);
            refreshReviews();
          })
          .catch((err) => {
            console.log(`Error in GET: ${err}`);
          });
      })
      .catch((err) => {
        console.log('POST error');
        console.log(err);
      });
  }

  render() {
    const {stars, body} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="stars" placeholder="How many stars?" onChange={this.handleChange} value={stars} />
        <br />
        <br />
        <textarea name="body" placeholder="Please type your review here..." onChange={this.handleChange} value={body} />
        <br />
        <br />
        <button type="submit">Submit Review</button>
      </form>
    );
  }
}

export default NewReview;
