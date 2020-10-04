import React from 'react';
import moment from 'moment';
import Helpers from './Helpers';

const ReviewItem = (props) => {
  return (
    <div className="review">
      <img src={Helpers.starPath(null, props.review.score)} alt="" />
      <div className="review-body">{props.review.body}</div>
      <div className="last-updated">Submitted by a student on {moment(props.review.createdAt).format('ll')}</div>
    </div>
  );
};

export default ReviewItem;
