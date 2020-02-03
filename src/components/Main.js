import React from 'react';
import Header from './Header';

import ProductList from './ProductList';
import Carousel from './Carousel';
import styled from 'styled-components';

const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const MainContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 24px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 4px 5px 0 rgba(0, 0, 0, 0.14);

  & > h2 {
    font-family: Roboto;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: normal;
    color: #6200ee;
    margin-bottom: 12px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(33, 33, 33, 0.08);
`;

const Main = () => {
  return (
    <MainBox>
      <Header />
      <Carousel />
      <MainContainer>
        <h2>경매장터 추천상품</h2>
        <Divider />
        <ProductList />
        <ProductList />
      </MainContainer>
    </MainBox>
  );
};

export default Main;
