import React from 'react';

const SchoolItem = (props) => {
  const computeRating = (ratingObj) => {
    return Math.round((ratingObj.lowIncome + ratingObj.studentGrowth + ratingObj.testScores + ratingObj.equity) / 4);
  };

  const computeReviewScore = (reviewsArr) => {
    const reviewScoreSum = reviewsArr.reduce((acc, current) => acc + current.score, 0);
    return Math.round(reviewScoreSum / reviewsArr.length);
  };

  return (
    <div>
      <p>{ computeRating(props.school.rating) } / 10</p>
      <p>{ props.school.name }</p>
      <p>{ props.school.type } • { props.school.grades } • { props.school.choiceSchool }</p>
      <p>{ computeReviewScore(props.school.reviews) } stars with { props.school.reviews.length } reviews</p>
      <p>{props.school.distance} mi Distance</p>
    </div>
  );
};

export default SchoolItem;
