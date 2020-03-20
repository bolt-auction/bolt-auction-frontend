import React from 'react';
import Modal from '../common/Modal';

import BidListItem from './BidListItem';

const BidListModal = ({ handleModal }) => {
  return (
    <Modal title="입찰 기록" handleModal={handleModal}>
      <BidListItem />
      <BidListItem />
      <BidListItem />
      <BidListItem />
      <BidListItem />
      <BidListItem />
      <BidListItem />
      <BidListItem />
      <BidListItem />
      <BidListItem />
      <BidListItem />
      <BidListItem />
    </Modal>
  );
};

export default BidListModal;
