/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Helpers from './Helpers';
import styled from 'styled-components';

const SchoolInfoContent = styled.div`
  padding-bottom: 24px;
`;
const SchoolRatingTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
const RatingNumModal = styled.span`
  font-weight: 600;
  font-size: 18px;
  margin-left: 11px;
`;
const OutOf = styled.span`
  font-size: .75rem;
`;
const SchoolNameModal = styled.span`
  white-space: nowrap;
  line-height: 24px;
  margin-left: 40px;
`;
const SchoolAddress = styled.div`
  padding-top: 16px;
  padding-bottom: 4px;
  line-height: 24px;
`;
const SubInfoSmall = styled.div`
  display: block;
  padding-top: 4px;
  line-height: 18px;
  color: #767676;
  font-size: .875rem;
`;
const StarRatingModal = styled.div`
  line-height: 20px;
  display: flex;
  align-items: center;
  padding-top: 4px;
  `;
const StarRatingModalImg = styled.img`
    width: 100px;
`;
const NumReviewsModal = styled.div`
  margin-left: 10px;
  margin-top: 4px;
`;

const TopInfoModalSection = ({school}) => (
  <SchoolInfoContent>
    <SchoolRatingTitle>
      <Ellipse>
        <span>
          <RatingNumModal>{Helpers.computeRating(school.rating)}</RatingNumModal>
          <OutOf>/10</OutOf>
        </span>
        <SchoolNameModal>{school.name}</SchoolNameModal>
      </Ellipse>
    </SchoolRatingTitle>
    <SchoolAddress>
      {school.address}
    </SchoolAddress>
    <SubInfoSmall>
      {school.type} • {school.grades} • {school.studentCount} students
    </SubInfoSmall>
    <StarRatingModal>
      <StarRatingModalImg src={Helpers.starPath(school.reviews)} alt="" />
      <NumReviewsModal>
        {school.reviews.length} reviews
      </NumReviewsModal>
    </StarRatingModal>
  </SchoolInfoContent>
);

export default TopInfoModalSection;
