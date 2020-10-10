/* eslint-disable import/extensions */
/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import TopInfoModalSection from './TopInfoModalSection.jsx';
import RatioModalSection from './RatioModalSection.jsx';
import GreatSchoolsModalSection from './GreatSchoolsModalSection.jsx';
import ReviewsModalSection from './ReviewsModalSection.jsx';
import NewReview from './NewReview.jsx';

const ModalShow = styled.div`
position: fixed;
top: 0;
left: 0;
width:100%;
height: 100%;
background: rgba(0, 0, 0, 0.2);
display: block;
`;

const ModalHide = styled(ModalShow)`
  display: none;
`;

const ModalDisplay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: ${(props) => props.visibility};
`;

class ReviewsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'reviews',
    };

    this.changeView = this.changeView.bind(this);
    this.refreshReviews = this.refreshReviews.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  refreshReviews() {
    this.setState({
      view: 'reviews',
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
      return <NewReview school={this.props.school} refreshSchools={this.props.refreshSchools} refreshReviews={this.refreshReviews} />;
    }
    return <h2>No Schools found</h2>;
  }

  render() {
    const toggle = this.props.modalState;
    return (
      <ModalDisplay visibility={toggle ? 'block' : 'none'}>
        <section className="modal-main">
          <img src="http://localhost:3002/assets/close.png" alt="" className="closeModal" onClick={this.props.modalHandlerHide} />
          <div className="modal-wrapper">
            <div className="content">
              <TopInfoModalSection school={this.props.school} />
              {this.renderView()}
            </div>
          </div>
        </section>
      </ModalDisplay>
    );
  }
}

export default ReviewsModal;
