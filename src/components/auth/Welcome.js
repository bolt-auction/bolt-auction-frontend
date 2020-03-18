import React from 'react';
import styled from 'styled-components';

import Typography from '../../styles/Typography';
import Colors from '../../styles/Colors';
import catWithBox from '../../imgs/ginger-cat-741.png';

const WelcomeBlock = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${Colors.onSurfaceMedium};
  img {
    width: 75%;
  }
  b {
    ${Typography.Subtitle1};
  }
  p {
    ${Typography.Caption};
  }
`;

const Welcome = () => {
  return (
    <WelcomeBlock>
      <img src={catWithBox} alt="welcome" />
      <b>번개 옥션으로 중고거래 시작하기</b>
      <p>간편하게 가입하고 중고거래를 시작하세요!</p>
    </WelcomeBlock>
  );
};

export default Welcome;
