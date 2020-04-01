import React from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';
import MainCarousel from './MainCarousel';

import Colors from '../styles/Colors';
import Elevation from '../styles/Elevation';
import { useEffect } from 'react';

const MainContentBlock = styled.section`
  margin: 0 auto;
  padding: 1.5rem;
  max-width: 1024px;
  border-radius: 15px 15px 0 0;
  box-shadow: ${Elevation.z4};
  background-color: ${Colors.surface};

  & h2 {
    color: ${Colors.primary};
    margin-bottom: 12px;
  }
`;

// ContentsBox 내부의 Divider
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(33, 33, 33, 0.08);
`;

const Main = ({ items, getItems }) => {
  useEffect(() => {
    getItems(0);
  }, [getItems]);

  return (
    <>
      <MainCarousel />
      <MainContentBlock>
        <h2 className="content-title">경매장터 인기상품</h2>
        <Divider />
        <ProductList items={items['_embedded']?.itemList} />
      </MainContentBlock>
    </>
  );
};

export default Main;
