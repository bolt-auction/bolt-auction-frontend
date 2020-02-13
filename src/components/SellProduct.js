import React from 'react';
import { MainBox, NonMainConatiner, MainContainer, Divider } from './Main';

const SellProduct = () => {
  return (
    <MainBox>
      <NonMainConatiner>
        <h1 className="non-main-title">판매하기</h1>
        <MainContainer>
          <Divider />
        </MainContainer>
      </NonMainConatiner>
    </MainBox>
  );
};

export default SellProduct;
