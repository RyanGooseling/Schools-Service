/* eslint-disable no-else-return */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ReviewItem from './ReviewItem.jsx';

const NewReview = styled.p`
  color: #1080a2;
  cursor: pointer;
`;

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
  });
  return (
    <div className="reviews">
      <h4>Community Reviews ({reviews.length})</h4>
      {reviews.map((review, index) => <ReviewItem review={review} key={index} />)}
      <NewReview onClick={() => { changeView('new-review'); }}>Add new review</NewReview>
    </div>
  );
};

export default ReviewsModalSection;
