import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';

import Modal from '../common/Modal';
import PriceFormat from '../common/PriceFormat';
import TextField from '../common/TextField';
import Button from '../common/Button';
import BidListItem from './BidListItem';

const BidModalBlock = styled.div`
  background-color: azure;
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
  endDt,
}) => {
  const handleModal = () =>
    !isVisible ? setIsVisible(true) : setIsVisible(false);
  const title = titleMap[type];
  return (
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
            <div>입찰 기록이 없어요!</div>
          )}
        </>
      )}
      {type === 'bid' && (
        <>
          <BidModalBlock>
            <h3>{itemName}</h3>
            <div>
              <PriceFormat price={currentPrice} />
            </div>
            <div>
              <PriceFormat price={quickPrice} />
            </div>
            <div>
              <Moment date={endDt} toNow />{' '}
              <Moment date={endDt} format="[(]YYYY-MM-DD HH:mm[)]" />
            </div>
            <TextField icon="won" />
            <Button primary fullWidth>
              입찰하기
            </Button>
          </BidModalBlock>
        </>
      )}
    </Modal>
  );
};

export default BidModal;

// export const handleModal = (state, setState) =>
//   !state ? setState(true) : setState(false);
