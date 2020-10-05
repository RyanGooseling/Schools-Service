/* eslint-disable no-else-return */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewItem from './ReviewItem.jsx';

const ReviewsModalSection = ({school, changeView}) => {
  const {reviews} = school;
  reviews.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else if (a.createdAt > b.createdAt) {
      return -1;
    } else {
      return 0;
    }
    // return (a.createdAt < b.createdAt) ? 1 : ((a.createdAt > b.createdAt) ? -1 : 0);
  });
  return (
    <div className="reviews">
      <h4>Community Reviews ({reviews.length})</h4>
      {reviews.map((review, index) => <ReviewItem review={review} key={index} />)}
      <p className="new-review" onClick={() => {changeView('new-review')}}>Add new review</p>
    </div>
  );
};

export default ReviewsModalSection;
