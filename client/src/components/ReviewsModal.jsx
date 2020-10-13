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

const ModalDisplay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: ${(props) => props.visibility};
`;

const ModalMain = styled.section`
  position:fixed;
  background: white;
  width: 560px;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  display: block !important;
`;

const CloseModal = styled.img`
  float: right;
  width: 20px;
  padding-right: 21px;
  padding-top: 20px;
`;

const ModalWrapper = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
  max-width: 100%;
  text-align: left;
  padding: 0 24px 24px 24px;
  overflow-y: initial !important;
`;

const ModalContent = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  height: 35em;
  overflow-y: auto;
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
        <ModalMain>
          <CloseModal src="http://localhost:3002/assets/close.png" alt="" onClick={this.props.modalHandlerHide} />
          <ModalWrapper>
            <ModalContent>
              <TopInfoModalSection school={this.props.school} />
              {this.renderView()}
            </ModalContent>
          </ModalWrapper>
        </ModalMain>
      </ModalDisplay>
    );
  }
}

export default ReviewsModal;
