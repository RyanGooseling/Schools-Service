/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import styled from 'styled-components';
import ReviewsModal from './ReviewsModal.jsx';
import Helpers from './Helpers';

const SchoolsTableRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: none;
  border-bottom: none;
`;

const RatingNameCol = styled.td`
  padding: 12px 0 12px 0;
  display: inherit;
  max-width: 350px;
`;

const RatingCol = styled.div`
  padding-right: 1rem;
`;

const Ellipse = styled.div`
  background-color: #f5f5f5;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 18px;
  text-align: center;
  line-height: 56px;
`;

const RatingNum = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

const OutOf = styled.span`
  font-size: .75rem;
`;

const NameCol = styled.div`
  min-width: 275px;
  width: 40%;
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;
`;

const NameInfo = styled.div`
  vertical-align: middle;
  line-height: 1.4rem;
  font-size: .75rem;
`;

const SchoolName = styled.div`
  font-size: 1rem;
  white-space: nowrap;
  line-height: 24px;
`;

const SchoolTitle = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  color: #1080a2;
  cursor: pointer;
`;

const SubInfoSmall = styled.div`
  font-size: .875rem;
  display: block;
  padding-top: 4px;
  line-height: 18px;
  color: #767676;
`;

const SubInfoSmaller = styled(SubInfoSmall)`
  font-size: .75rem;
`;

const NumStudentsCol = styled.td`
  min-width: 75px;
`;

const Students = styled.div`
  line-height: 24px;
`;

const RatingTd = styled.td`
  padding-right: 1rem;
`;

const StarRating = styled.div`
  line-height: 24px;
`;

const StarRatingImg = styled.img`
  width: 10em;
`;

const DistanceCol = styled.td`
  width: 10em;
`;

const Value = styled.div`
  line-height: 24px;
`;


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
        <SchoolsTableRow onClick={this.modalHandlerShow}>
          <RatingNameCol>
            <RatingCol>
              <Ellipse>
                <div>
                  <RatingNum>{Helpers.computeRating(this.props.school.rating)}</RatingNum>
                  <OutOf> / 10</OutOf>
                </div>
              </Ellipse>
            </RatingCol>
            <NameCol>
              <NameInfo>
                <SchoolName>
                  <SchoolTitle>
                    {this.props.school.name}
                  </SchoolTitle>
                  <SubInfoSmaller>
                    {this.props.school.type} • {this.props.school.grades} • {this.props.school.choiceSchool}
                  </SubInfoSmaller>
                </SchoolName>
              </NameInfo>
            </NameCol>
          </RatingNameCol>
          <NumStudentsCol>
            <Students>
              {this.props.school.studentCount}
            </Students>
            <SubInfoSmall>
              Students
            </SubInfoSmall>
          </NumStudentsCol>
          <RatingTd>
            <StarRating>
              <StarRatingImg src={Helpers.starPath(this.props.school.reviews)} alt="" />
              <SubInfoSmaller>{this.props.school.reviews.length} reviews</SubInfoSmaller>
            </StarRating>
          </RatingTd>
          <DistanceCol>
            <Value>{this.props.school.distance} mi</Value>
            <SubInfoSmall>Distance</SubInfoSmall>
          </DistanceCol>
        </SchoolsTableRow>
        <ReviewsModal modalState={this.state.modal} modalHandlerHide={this.modalHandlerHide} school={this.props.school} refreshSchools={this.props.refreshSchools} />
      </div>
    );
  }
}

export default SchoolItem;
