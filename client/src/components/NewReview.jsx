/* eslint-disable object-curly-spacing */
import React from 'react';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('write axios call here');
    // also need to re-render the sub-body sections
  }

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
