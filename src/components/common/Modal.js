import React from 'react';
import styled from 'styled-components';
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${Colors.blackDragged};
  h3 {
    color: ${Colors.primary};
  }
`;

const ModalBody = styled.div`
  height: 584px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`;

const Modal = ({ randomBg, title, children }) => {
  return (
    <>
      {randomBg && <BgBlock />}
      <ModalOverlay>
        <ModalBlock>
          <ModalTitle>
            <h3>{title}</h3>
          </ModalTitle>
          <ModalBody>{children}</ModalBody>
        </ModalBlock>
      </ModalOverlay>
    </>
  );
};

export default Modal;
