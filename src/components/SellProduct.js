import React from 'react';
import { MainBox, NonMainConatiner, MainContainer, Divider } from './Main';
import Header from './Header';

const SellProduct = () => {
  return (
    <MainBox>
      <Header />
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
