import React from 'react';
import moment from 'moment';
import Helpers from './Helpers';
import styled from 'styled-components';

const ReviewImg = styled.img`
  width: 100px;
`;

const ReviewBody = styled.div`
  padding-top: 16px;
  padding-bottom: 4px;
  line-height: 24px;
  width: 500px;
`;

const LastUpdated = styled.div`
  font-size: 12px;
  color: #767676;
  padding-bottom: 4px;
  padding-top: 12px;
  margin-bottom: 30px;
`;

const ReviewItem = ({review}) => (
  <div>
    <ReviewImg src={Helpers.starPath(null, review.score)} alt="" />
    <ReviewBody>{review.body}</ReviewBody>
    <LastUpdated>Submitted by a student on {moment(review.createdAt).format('ll')}</LastUpdated>
  </div>
);

export default ReviewItem;
