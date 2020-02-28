import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

const ProductDetailBlock = styled(Container);

const ProductDetail = ({ match, history }) => {
  // const { id } = match.params;
  return (
    <Container>
      <Row>
        <Col>category.name</Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <img src="" alt="" />
        </Col>
        <Col>
          <h3>상품명</h3>
          <div>현재가 </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
