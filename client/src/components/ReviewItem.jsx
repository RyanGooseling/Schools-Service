import React from 'react';
import moment from 'moment';
import Helpers from './Helpers';

const ReviewItem = ({review}) => {
  return (
    <div className="review">
      <img src={Helpers.starPath(null, review.score)} alt="" />
      <div className="review-body">{review.body}</div>
      <div className="last-updated">Submitted by a student on {moment(review.createdAt).format('ll')}</div>
    </div>
  );
};

export default ReviewItem;
