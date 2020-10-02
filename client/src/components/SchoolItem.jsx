/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import ReviewsModal from './ReviewsModal.jsx';

// class SchoolItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false,
//     };

//     this.showModal = this.showModal.bind(this);
//   }

//   computeRating(ratingObj) {
//     return Math.round((ratingObj.lowIncome + ratingObj.studentGrowth + ratingObj.testScores + ratingObj.equity) / 4);
//   }

//   starPath(reviewsArr) {
//     const map = {
//       0: 'zero',
//       1: 'one',
//       2: 'two',
//       3: 'three',
//       4: 'four',
//       5: 'five',
//     };
//     const reviewScoreSum = reviewsArr.reduce((acc, current) => acc + current.score, 0);
//     const averageStarsNum = Math.round(reviewScoreSum / reviewsArr.length);
//     return `./assets/${map[averageStarsNum]}Star.png`;
//   }

//   showModal() {
//     console.log('show modal');
//     this.setState({
//       modal: true,
//     }, () => { console.log(`modalShow: ${this.state.modal}`); });
//   }

//   render() {
//     return (
//       <tr className="schools-table-row">
//         <td className="rating-and-name-col">
//           <div className="rating-col">
//             <div className="ellipse">
//               <div className="rating-text">
//                 <span className="rating-num">{ this.computeRating(this.props.school.rating) }</span>
//                 <span className="out-of"> / 10</span>
//               </div>
//             </div>
//           </div>
//           <div className="name-col">
//             <div className="name-and-info">
//               <div className="school-name font-size-base">
//                 <div className="school-title" onClick={this.showModal}>
//                   { this.props.school.name }
//                 </div>
//                 <div className="sub-info font-size-smaller">
//                   { this.props.school.type } • { this.props.school.grades } • { this.props.school.choiceSchool }
//                 </div>
//               </div>
//             </div>
//           </div>
//         </td>
//         <td className="num-students-col">
//           <div className="students">
//             { this.props.school.studentCount }
//           </div>
//           <div className="sub-info font-size-small">
//             Students
//           </div>
//         </td>
//         <td className="rating-col">
//           <div className="star-rating">
//             <img src={this.starPath(this.props.school.reviews)} alt="" />
//             <div className="sub-info font-size-smaller num-reviews">{ this.props.school.reviews.length } reviews</div>
//           </div>
//         </td>
//         <td className="distance-col">
//           <div className="value">{this.props.school.distance} mi</div>
//           <div className="sub-info font-size-small">Distance</div>
//         </td>
//       </tr>
//     );
//   }
// }

const SchoolItem = (props) => {
  const computeRating = (ratingObj) => Math.round((ratingObj.lowIncome + ratingObj.studentGrowth + ratingObj.testScores + ratingObj.equity) / 4);

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
    <div>

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
                <div className="school-title" onClick={props.modalHandlerShow}>
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
            <div className="sub-info font-size-smaller num-reviews">
              { props.school.reviews.length } reviews
            </div>
          </div>
        </td>
        <td className="distance-col">
          <div className="value">{props.school.distance} mi</div>
          <div className="sub-info font-size-small">Distance</div>
        </td>
      </tr>
      <ReviewsModal showModal={props.showModal} modalHandlerHide={props.modalHandlerHide} />
    </div>
  );
};

export default SchoolItem;
