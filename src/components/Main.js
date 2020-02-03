import React from 'react';
import Header from './Header';
import Categories from './Categories';
import ProductList from './ProductList';
import styled from 'styled-components';

const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const Main = () => {
  return (
    <MainBox>
      <Header />
      <Categories />
      <ProductList />
      <ProductList />
    </MainBox>
  );
};

export default Main;
