/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import TopInfoModalSection from './TopInfoModalSection.jsx'
import RatioModalSection from './RatioModalSection.jsx'
import GreatSchoolsModalSection from './GreatSchoolsModalSection.jsx'
import ReviewsModalSection from './ReviewsModalSection.jsx'
import NewReview from './NewReview.jsx'

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
      )
    } else if (this.state.view === 'new-review') {
        return <NewReview />;
      }
  }

  render() {
    return (
      <div className={this.showHideClassName()}>
        <section className="modal-main">
          <img src="./assets/close.png" alt="" className="closeModal" onClick={this.props.modalHandlerHide} />
          <div className="modal-wrapper">
            <div className="content">
              <TopInfoModalSection school={this.props.school} />
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