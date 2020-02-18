import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Colors';
import Elevation from '../styles/Elevation';
import logo512 from '../imgs/logo512.png';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
`;

const ModalBlock = styled.div`
  z-index: 9999;
  width: 360px;
  height: 640px;
  background-color: #fafafa;
  background-color: white;
  box-shadow: ${Elevation.z24};

  .modal-header {
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid ${Colors.blackDragged};
    h3 {
      color: ${Colors.primary};
    }
  }

  .modal-body {
    /* height: 584px; */
    height: 100%;
    padding: 0 16px;

    &,
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    .content {
      height: 152px;
      & > img {
        width: 70px;
        height: 70px;
      }
    }

    .login {
      width: 100%;
      & > button {
        width: 100%;
        height: 36px;
        border-radius: 4px;
        margin-bottom: 16px;
        box-shadow: ${Elevation.z2};
        transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
        &:hover {
          cursor: pointer;
          box-shadow: ${Elevation.z4};
        }
      }
      &-email {
        color: ${Colors.onSurfaceMedium};
        background-color: rgba(33, 33, 33, 0.08);
      }
      &-kakao {
        color: rgba(30, 30, 30, 0.87);
        background-color: #fae100;
      }
    }

    .signup {
      color: ${Colors.primary};
    }
  }
`;

const Modal = () => {
  return (
    <ModalOverlay>
      <ModalBlock>
        {/* <div className="modal-header">
          <h3>로그인</h3>
        </div> */}
        <div className="modal-body">
          <div className="content">
            <img src={logo512} alt="번개 옥션" />
            <p>번개 옥션으로 중고거래 시작하기</p>
            <p>간편하게 가입하고 중고거래를 시작하세요!</p>
          </div>
          <div className="login">
            <button className="login-email">이메일로 로그인</button>
            <button className="login-kakao">카카오톡으로 로그인</button>
          </div>
          <div className="signup">
            <p>회원가입</p>
          </div>
        </div>
      </ModalBlock>
    </ModalOverlay>
  );
};

export default Modal;
