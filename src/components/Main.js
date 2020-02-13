import React from 'react';
import ProductList from './ProductList';
import Carousel from './Carousel';
import styled from 'styled-components';
import Colors from '../styles/Colors';
import Footer from './Footer';
import { Container, Row, Col, ScreenBadge } from 'react-awesome-styled-grid';

export const MainBox = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const NonMainConatiner = styled.section`
  width: 1024px;
  margin: 0 auto;
  margin-top: 108px;
  padding: 1px 0;
  & .non-main-title {
    margin: 50px 0;
  }
`;

export const MainContainer = styled.section`
  margin: 0 auto;
  padding: 24px;
  max-width: 1024px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 4px 5px 0 rgba(0, 0, 0, 0.14);

  & h2 {
    font-family: Roboto;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: normal;
    color: ${Colors.primary};
    margin-bottom: 12px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(33, 33, 33, 0.08);
`;

const Main = () => {
  return (
    <MainBox>
      <Carousel />
      <MainContainer>
        <Container debug style={{ width: '100%' }}>
          <ScreenBadge />
          <Row debug>
            <Col debug sm={12} md={6} lg={4}>
              <h2>경매장터 인기상품</h2>
            </Col>
          </Row>
          <Row debug>
            <Col debug>
              <Divider />
            </Col>
          </Row>
          <Row debug noGutter>
            <Col debug lg={12} noGutter>
              <ProductList />
            </Col>
          </Row>
        </Container>
      </MainContainer>
      <Footer />
    </MainBox>
  );
};

export default Main;
