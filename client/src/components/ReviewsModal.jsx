/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Helpers from './Helpers';
import RatioModalSection from './RatioModalSection.jsx'
import GreatSchoolsModalSection from './GreatSchoolsModalSection.jsx'
import ReviewsModalSection from './ReviewsModalSection.jsx'

class ReviewsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'reviews',
    };

    this.showHideClassName = this.showHideClassName.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  showHideClassName() {
    return this.props.modalState ? 'modal display-block' : 'modal display-none';
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    if (this.state.view === 'reviews') {
      return (
        <div className="sub-body">
          <RatioModalSection school={this.props.school} />
          <GreatSchoolsModalSection school={this.props.school} />
          <ReviewsModalSection school={this.props.school} changeView={this.changeView} />
        </div>

      );
    }
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
              {this.renderView()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ReviewsModal;


// set a state of `view` initialized to 'reviews'

// create a `changeView` method that sets state.view to a passed in `option` parameter.

// based on what this.state.view is
  // create renderView() method that returns an instance of the desired class
  // could also put an api call here, then return the instance

// inside the render
  // create the element you want triggering the view change
  // set the onClick for the element and pass in the proper argument. wrap this in an anonymous function