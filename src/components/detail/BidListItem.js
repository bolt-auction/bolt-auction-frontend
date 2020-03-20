import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

import Typography from '../../styles/Typography';
import Colors from '../../styles/Colors';
import PriceFormat from '../common/PriceFormat';
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

const BidListItem = ({ member, price, createDt }) => {
  return (
    <>
      <BidListItemBlock>
        <img
          src="https://via.placeholder.com/48x48?text=USER"
          alt="프로필 이미지"
          style={{ width: '48px' }}
        />
        <div>
          <h4 className="bid-user">{member.memberName}</h4>
          <Moment
            className="bid-date"
            date={createDt}
            format="YYYY-MM-DD HH:mm.ss"
          />
        </div>
        <PriceFormat className="bid-price" price={price} />
      </BidListItemBlock>
      <Divider thick="1px" />
    </>
  );
};

export default BidListItem;
