import React from 'react';
import styled from 'styled-components';

import Typography from '../../styles/Typography';
import Colors from '../../styles/Colors';
import gingerCatWithBox from '../../lib/images/gingerCatWithBox.png';

const WelcomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  /* overflow: hidden; */
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
      <img src={gingerCatWithBox} alt="welcome" />
      <b>번개 옥션으로 중고거래 시작하기</b>
      <p>간편하게 가입하고 중고거래를 시작하세요!</p>
    </WelcomeBlock>
  );
};

export default React.memo(Welcome);
