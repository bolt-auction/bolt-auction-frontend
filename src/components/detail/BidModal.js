import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';

import ModalPortal from '../common/ModalPortal';
import Modal from '../common/Modal';
import PriceFormat from '../common/PriceFormat';
import TextField from '../common/TextField';
import Button from '../common/Button';
import Typography from '../../styles/Typography';
import Colors from '../../styles/Colors';
import BidListItem from './BidListItem';

import gingerCatBulb from '../../imgs/ginger-cat-729.png';

const BidModalBlock = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;

  .row {
    display: flex;
    margin-bottom: 1rem;
  }

  .product {
    &-title {
      ${Typography.Headline5};
      color: ${Colors.onSurfaceHigh};
      line-height: 28px;
      width: 328px;
      &-block {
        height: 112px;
        display: flex;
        align-items: center;
        overflow: hidden;
        padding: 0rem 0.75rem;
        /* justify-content: center; */
      }
    }
  }

  .data-block {
    padding: 0rem 0.5rem;
  }

  .label {
    width: 94px;
    ${Typography.Headline6};
    color: ${Colors.onSurfaceMedium};
    margin-right: 1rem;
  }

  .current-price {
    ${Typography.Headline4};
    color: ${Colors.onSurfaceHigh};
    margin-bottom: 1rem;
    &-label {
      ${Typography.Headline6};
      color: ${Colors.onSurfaceHigh};
    }
  }

  .quick-price {
    ${Typography.Headline5};
    color: ${Colors.onSurfaceMedium};
    margin-bottom: 1rem;
  }

  form {
    button {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

const EmptyBidList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  color: ${Colors.onSurfaceHigh};
`;

const titleMap = {
  bidList: '입찰 기록',
  bid: '입찰',
};

const BidModal = ({
  type,
  isVisible,
  setIsVisible,
  bidList,
  itemName,
  quickPrice,
  currentPrice,
  minBidPrice,
  bidPrice,
  endDt,
  onChangeBidField,
  onSubmitBid,
}) => {
  const handleModal = () =>
    !isVisible ? setIsVisible(true) : setIsVisible(false);
  const title = titleMap[type];
  return (
    <ModalPortal>
      <Modal title={title} handleModal={handleModal}>
        {type === 'bidList' && (
          <>
            {bidList ? (
              bidList.map(bidItem => (
                <BidListItem
                  key={bidItem.bidId}
                  member={bidItem.member}
                  price={bidItem.price}
                  createDt={bidItem.createDt}
                />
              ))
            ) : (
              <EmptyBidList>
                <img alt="ginger cat" src={gingerCatBulb} />
                <p>아직 아무도 입찰하지 않았어요.</p>
                <h3>빨리 참여해보세요!</h3>
              </EmptyBidList>
            )}
          </>
        )}
        {type === 'bid' && (
          <>
            <BidModalBlock>
              <div className="product-title-block">
                <h2 className="product-title">{itemName}</h2>
              </div>
              <div className="data-block">
                <div className="row">
                  <div className="label">현재가</div>
                  <div className="current-price">
                    <PriceFormat price={currentPrice} />
                  </div>
                </div>
                <div className="row">
                  <div className="label">즉시 낙찰가</div>
                  <div className="quick-price">
                    <PriceFormat price={quickPrice} />
                  </div>
                </div>
                <div className="row">
                  <div className="label">입찰 단위</div>
                  <div className="quick-price">
                    <PriceFormat price={minBidPrice} />
                  </div>
                </div>
                <div className="row">
                  <div className="label">경매 종료</div>
                  <div>
                    <Moment date={endDt} toNow />{' '}
                    <Moment date={endDt} format="[(]YYYY-MM-DD HH:mm[)]" />
                  </div>
                </div>
              </div>
              <form onSubmit={onSubmitBid}>
                <TextField
                  icon="won"
                  name="bidPrice"
                  autoComplete="bidPrice"
                  placeholder="입찰할 가격"
                  type="number"
                  value={bidPrice}
                  onChange={onChangeBidField}
                  min={currentPrice}
                  step={minBidPrice}
                />
                <Button primary fullWidth>
                  입찰하기
                </Button>
              </form>
            </BidModalBlock>
          </>
        )}
      </Modal>
    </ModalPortal>
  );
};

export default BidModal;

// export const handleModal = (state, setState) =>
//   !state ? setState(true) : setState(false);
