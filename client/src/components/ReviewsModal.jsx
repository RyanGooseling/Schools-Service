/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import Helpers from './Helpers';
import ReviewItem from './ReviewItem.jsx';

class ReviewsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: this.props.school,
    };

    this.showHideClassName = this.showHideClassName.bind(this);
    this.showState = this.showState.bind(this);
  }

  showHideClassName() {
    return this.props.modalState ? 'modal display-block' : 'modal display-none';
  }

  showState() {
    console.log(this.state.school);
  }

  render() {
    return (

      <div className={this.showHideClassName()}>
        <section className="modal-main">
          <img src="./assets/close.png" alt="" className="closeModal" onClick={this.props.modalHandlerHide} />
          <div className="modal-wrapper">
            <div className="content">
              <div className="school-info-content">
                <div className="school-rating-and-title">
                  <div className="ellipse">
                    <span className="rating-text">
                      <span className="rating-num-modal">{Helpers.computeRating(this.props.school.rating)}</span>
                      <span className="out-of">/10</span>
                    </span>
                    <span className="school-name-modal">{this.props.school.name}</span>
                  </div>
                </div>
                <div className="school-address">
                  {this.props.school.address}
                </div>
                <div className="sub-info font-size-small">
                  {this.props.school.type} • {this.props.school.grades} • {this.props.school.studentCount} students
                </div>
                <div className="star-rating-modal">
                  <img src={Helpers.starPath(this.props.school.reviews)} alt="" />
                  <div className="num-reviews-modal">
                    {this.props.school.reviews.length} reviews
                  </div>
                </div>
              </div>
              <div className="ratio">
                <div>{this.props.school.ratio} Students/Teachers</div>
                <div><a href={this.props.school.schoolUrl} target="_blank" rel="noreferrer">{this.props.school.name}</a></div>
                <div><a href={this.props.school.districtUrl} target="_blank" rel="noreferrer">{this.props.school.name} School District</a></div>
              </div>
              <div className="great-schools-section">
                <h4>GreatSchools Rating</h4>
                <div className="subrating-row">
                  <span className="subrating-score">
                    <span className="subrating-value">{this.props.school.rating.lowIncome}</span>
                    <span className="out-of">/10</span>
                  </span>
                  <span className="subrating-type">Low Income</span>
                </div>
                <div className="subrating-row">
                  <span className="subrating-score">
                    <span className="subrating-value">{this.props.school.rating.studentGrowth}</span>
                    <span className="out-of">/10</span>
                  </span>
                  <span className="subrating-type">Student Growth</span>
                </div>
                <div className="subrating-row">
                  <span className="subrating-score">
                    <span className="subrating-value">{this.props.school.rating.testScores}</span>
                    <span className="out-of">/10</span>
                  </span>
                  <span className="subrating-type">Test Scores</span>
                </div>
                <div className="subrating-row">
                  <span className="subrating-score">
                    <span className="subrating-value">{this.props.school.rating.equity}</span>
                    <span className="out-of">/10</span>
                  </span>
                  <span className="subrating-type">Equity</span>
                </div>
                <div className="last-updated">Last Updated: {moment(this.props.school.rating.lastUpdated).format('ll')}</div>
              </div>
              <div className="reviews">
                <h4>Community Reviews ({this.props.school.reviews.length})</h4>
                {this.props.school.reviews.map((review, index) => <ReviewItem review={review} id={index} />)}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ReviewsModal;
