/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

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
                      <span className="rating-num-modal">6</span>
                      <span className="out-of">/10</span>
                    </span>
                    <span className="school-name-modal">{this.props.school.name}</span>
                  </div>
                </div>
                <div className="school-address">
                  846 Corona St, Denver, CO 80218
                </div>
                <div className="sub-info font-size-small">
                  Public • 6 to 8 • 280 students
                </div>
                <div className="star-rating-modal">
                  <img src="./assets/threeStar.png" alt="" />
                  <div className="num-reviews-modal">
                    27 reviews
                  </div>
                </div>
              </div>
              <div className="school-address">
                <div>15 students / teachers</div>
                <div><a href="google.com">Morey Middle School</a></div>
                <div><a href="google.com">Denver Country School District</a></div>
              </div>
              <div className="great-schools-section">
                <h4>GreatSchools Rating</h4>
                <div className="subrating-row">
                  <span className="subrating-score">
                    <span className="subrating-value">4</span>
                    <span className="out-of">/10</span>
                  </span>
                  <span className="subrating-type">Low Income</span>
                </div>
                <div className="subrating-row">
                  <span className="subrating-score">
                    <span className="subrating-value">3</span>
                    <span className="out-of">/10</span>
                  </span>
                  <span className="subrating-type">Student Growth</span>
                </div>
                <div className="subrating-row">
                  <span className="subrating-score">
                    <span className="subrating-value">10</span>
                    <span className="out-of">/10</span>
                  </span>
                  <span className="subrating-type">Test Scores</span>
                </div>
                <div className="subrating-row">
                  <span className="subrating-score">
                    <span className="subrating-value">8</span>
                    <span className="out-of">/10</span>
                  </span>
                  <span className="subrating-type">Equity</span>
                </div>
                <div className="last-updated">Last Updated: Sep 22, 2020</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ReviewsModal;
