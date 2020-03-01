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
  padding: 1rem;
  z-index: 40;

  /* .modal-header {
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid ${Colors.blackDragged};
    h3 {
      color: ${Colors.primary};
    }
  } */
`;
// FIXME: 로그인, 회원가입 일때만 BgBlock이 렌더링 되게 수정 해야함
const Modal = ({ children, randomBg }) => {
  return (
    <>
      {randomBg && <BgBlock />}
      <ModalOverlay>
        <ModalBlock>{children}</ModalBlock>
      </ModalOverlay>
    </>
  );
};

export default Modal;
