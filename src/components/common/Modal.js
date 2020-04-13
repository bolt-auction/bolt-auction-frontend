import React, { useEffect } from 'react';
import styled from 'styled-components';

import { MdClose } from 'react-icons/md';
// import { MdChevronLeft } from 'react-icons/md';
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
  /* backdrop-filter: blur(1px); */
`;

const ModalBlock = styled.div`
  width: 360px;
  height: 640px;
  background-color: ${Colors.surface};
  box-shadow: ${Elevation.z24};
  border-radius: 4px;
  z-index: 40;
`;

const ModalHeader = styled.div`
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
  overflow: scroll;
  /* justify-content: space-around; */
  /* align-items: center; */
`;

/*
 * FIXME:
 *  모달이 랜더링 될때 root의 position을 fixed해서 스크롤링을 막았으나
 *  fixed하기 때문에 위치를 잃어 버리고 최상단으로 이동한다. 때문에 구현방식을 바꿔야함
 */
/**
 * 모달을 랜더링 합니다.
 * @param {object} props
 * @param {string} props.title - 모달 타이틀
 * @param {boolean} [props.randomBg] - 랜덤 배경 이미지 사용
 * @param {function} [props.handleModal] - 모달 랜더링 핸들러
 */
const Modal = ({ children, title, handleModal, randomBg }) => {
  useEffect(() => {
    const rootStyle = document.getElementById('root').style;
    rootStyle.width = '100%';
    rootStyle.height = '100%';
    rootStyle.position = 'fixed';
    return () => {
      rootStyle.width = '';
      rootStyle.height = '';
      rootStyle.position = '';
    };
  }, []);
  return (
    <>
      {randomBg && <BgBlock />}
      {/* <ModalOverlay onClick={handleModal ? handleModal : false}> */}
      <ModalOverlay>
        <ModalBlock>
          <ModalHeader>
            {/* <MdChevronLeft className="back" /> */}
            <h3>{title}</h3>
            {handleModal && <MdClose className="close" onClick={handleModal} />}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalBlock>
      </ModalOverlay>
    </>
  );
};

export default Modal;
