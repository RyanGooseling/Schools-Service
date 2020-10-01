import React from 'react';

const SchoolItem = (props) => {
  const computeRating = (ratingObj) => {
    return Math.round((ratingObj.lowIncome + ratingObj.studentGrowth + ratingObj.testScores + ratingObj.equity) / 4);
  };

  const starPath = (reviewsArr) => {
    const map = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
    };
    const reviewScoreSum = reviewsArr.reduce((acc, current) => acc + current.score, 0);
    const averageStarsNum = Math.round(reviewScoreSum / reviewsArr.length);
    return `./assets/${map[averageStarsNum]}Star.png`;
  };

  return (
    <tr className="schools-table-row">
      <td className="rating-and-name-col">
        <div className="rating-col">
          <div className="ellipse">
            <div className="rating-text">
              <span className="rating-num">{ computeRating(props.school.rating) }</span>
              <span className="out-of"> / 10</span>
            </div>
          </div>
        </div>
        <div className="name-col">
          <div className="name-and-info">
            <div className="school-name font-size-base">
              <div className="school-title">
                { props.school.name }
              </div>
              <div className="sub-info font-size-smaller">
                { props.school.type } • { props.school.grades } • { props.school.choiceSchool }
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="num-students-col">
        <div className="students">
          { props.school.studentCount }
        </div>
        <div className="sub-info font-size-small">
          Students
        </div>
      </td>
      <td className="rating-col">
        <div className="star-rating">
          <img src={starPath(props.school.reviews)} alt="" />
          <div className="sub-info font-size-smaller num-reviews">{ props.school.reviews.length } reviews</div>
        </div>
      </td>
      <td className="distance-col">
        <div className="value">{props.school.distance} mi</div>
        <div className="sub-info font-size-small">Distance</div>
      </td>
    </tr>
  );
};

export default SchoolItem;
