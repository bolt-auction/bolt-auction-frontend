import React from 'react';
import styled from 'styled-components';

import { MdChevronLeft, MdClose } from 'react-icons/md';
import Colors from '../../styles/Colors';
import Elevation from '../../styles/Elevation';

const BgBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(https://source.unsplash.com/collection/9617783/1600x900);
  background-color: white;
  z-index: 25;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${Colors.scrim};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
`;

const ModalBlock = styled.div`
  width: 360px;
  height: 640px;
  background-color: ${Colors.surface};
  box-shadow: ${Elevation.z24};
  border-radius: 4px;
  z-index: 40;
`;

const ModalTitle = styled.div`
  height: 56px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Colors.blackDragged};
  h3 {
    color: ${Colors.primary};
    margin-left: auto;
    margin-right: auto;
  }
  svg {
    color: ${Colors.onSurfaceLow};
    cursor: pointer;
  }
  .back {
    font-size: 1.75rem;
  }
  .close {
    font-size: 1.5rem;
  }
`;

const ModalBody = styled.div`
  height: 584px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  /* align-items: center; */
  overflow: scroll;
`;

const Modal = ({ randomBg, title, children, handleModal }) => {
  return (
    <>
      {randomBg && <BgBlock />}
      {/* <ModalOverlay onClick={handleModal ? handleModal : false}> */}
      <ModalOverlay>
        <ModalBlock>
          <ModalTitle>
            {/* <MdChevronLeft className="back" /> */}
            <h3>{title}</h3>
            {handleModal && <MdClose className="close" onClick={handleModal} />}
          </ModalTitle>
          <ModalBody>{children}</ModalBody>
        </ModalBlock>
      </ModalOverlay>
    </>
  );
};

export default Modal;
