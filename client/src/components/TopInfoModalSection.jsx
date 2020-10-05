/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Helpers from './Helpers';

const TopInfoModalSection = ({school}) => (
  <div className="school-info-content">
    <div className="school-rating-and-title">
      <div className="ellipse">
        <span className="rating-text">
          <span className="rating-num-modal">{Helpers.computeRating(school.rating)}</span>
          <span className="out-of">/10</span>
        </span>
        <span className="school-name-modal">{school.name}</span>
      </div>
    </div>
    <div className="school-address">
      {school.address}
    </div>
    <div className="sub-info font-size-small">
      {school.type} • {school.grades} • {school.studentCount} students
    </div>
    <div className="star-rating-modal">
      <img src={Helpers.starPath(school.reviews)} alt="" />
      <div className="num-reviews-modal">
        {school.reviews.length} reviews
      </div>
    </div>
  </div>
);

export default TopInfoModalSection;
