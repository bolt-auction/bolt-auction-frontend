import React from 'react';
import ProductList from './ProductList';
import Carousel from './Carousel';
import * as Styled from '../styles/Styled';
import { Container, Row, Col, ScreenBadge } from 'react-awesome-styled-grid';

const Main = () => {
  return (
    <>
      <Carousel />
      <Styled.ContentsBox>
        <Container debug style={{ width: '100%' }}>
          <ScreenBadge />
          <Row debug noGutter>
            <Col debug sm={12} md={6} lg={4} noGutter>
              <h2>경매장터 인기상품</h2>
            </Col>
          </Row>
          <Row debug>
            <Col debug noGutter>
              <Styled.Divider />
            </Col>
          </Row>
          <Row debug>
            <Col debug lg={12} noGutter>
              <ProductList />
            </Col>
          </Row>
        </Container>
      </Styled.ContentsBox>
    </>
  );
};

export default Main;
