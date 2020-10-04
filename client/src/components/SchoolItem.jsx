/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import ReviewsModal from './ReviewsModal.jsx';
import Helpers from './Helpers';

class SchoolItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.modalHandlerShow = this.modalHandlerShow.bind(this);
    this.modalHandlerHide = this.modalHandlerHide.bind(this);
  }

  modalHandlerShow() {
    this.setState({
      modal: true,
    });
  }

  modalHandlerHide() {
    this.setState({
      modal: false,
    });
  }

  render() {
    return (
      <div>
        <tr className="schools-table-row" onClick={this.modalHandlerShow}>
          <td className="rating-and-name-col">
            <div className="rating-col">
              <div className="ellipse">
                <div className="rating-text">
                  <span className="rating-num">{Helpers.computeRating(this.props.school.rating)}</span>
                  <span className="out-of"> / 10</span>
                </div>
              </div>
            </div>
            <div className="name-col">
              <div className="name-and-info">
                <div className="school-name font-size-base">
                  <div className="school-title">
                    {this.props.school.name}
                  </div>
                  <div className="sub-info font-size-smaller">
                    {this.props.school.type} • {this.props.school.grades} • {this.props.school.choiceSchool}
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td className="num-students-col">
            <div className="students">
              {this.props.school.studentCount}
            </div>
            <div className="sub-info font-size-small">
              Students
            </div>
          </td>
          <td className="rating-col">
            <div className="star-rating">
              <img src={Helpers.starPath(this.props.school.reviews)} alt="" />
              <div className="sub-info font-size-smaller num-reviews">{this.props.school.reviews.length} reviews</div>
            </div>
          </td>
          <td className="distance-col">
            <div className="value">{this.props.school.distance} mi</div>
            <div className="sub-info font-size-small">Distance</div>
          </td>
        </tr>
        <ReviewsModal modalState={this.state.modal} modalHandlerHide={this.modalHandlerHide} school={this.props.school} />
      </div>
    );
  }
}

export default SchoolItem;
