import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

import { priceFormat } from '../../lib/util';

import Typography from '../../styles/Typography';
import Colors from '../../styles/Colors';
import Divider from '../common/Divider';

const BidListItemBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    border-radius: 50%;
  }
  .bid {
    &-user {
      ${Typography.Subtitle1};
      color: ${Colors.onSurfaceHigh};
    }
    &-date {
      ${Typography.Body2};
      color: ${Colors.onSurfaceMedium};
    }
    &-price {
      ${Typography.Subtitle2};
    }
  }
`;

const BidListItem = () => {
  return (
    <>
      <BidListItemBlock>
        <img
          src="https://via.placeholder.com/48x48"
          alt="프로필 이미지"
          style={{ width: '48px' }}
        />
        <div>
          <p className="bid-user">사용자 아이디</p>
          <Moment className="bid-date" format="YYYY-MM-DD HH:mm.ss" />
        </div>
        <p className="bid-price">{priceFormat(10000)}원</p>
      </BidListItemBlock>
      <Divider thick="1px" />
    </>
  );
};

export default BidListItem;
