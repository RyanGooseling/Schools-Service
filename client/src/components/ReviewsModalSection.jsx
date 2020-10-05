/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewItem from './ReviewItem.jsx';

const ReviewsModalSection = ({school, changeView}) => (
  <div className="reviews">
    <h4>Community Reviews ({school.reviews.length})</h4>
    {school.reviews.map((review, index) => <ReviewItem review={review} key={index} />)}
    <p className="new-review" onClick={() => {changeView('new-review')}}>Add new review</p>
  </div>
);

export default ReviewsModalSection;
