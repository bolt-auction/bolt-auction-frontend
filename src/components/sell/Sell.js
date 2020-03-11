import React from 'react';
import { Col, Container, Row } from 'react-awesome-styled-grid';

import Button from '../common/Button';
import ContentSection from '../common/ContentSection';
import Divider from '../common/Divider';
import SellForm from './SellForm';

// TODO: 이미지 업로드 기능 추가, 업로드용 input 컴포넌트 작성
const Sell = ({ product, sell, onChange, onSubmit }) => {
  const { images } = product;
  return (
    <ContentSection title="판매하기">
      <Container style={{ padding: '6rem' }}>
        <Row>
          <Col>
            <h3>이미지 등록 {images.length}/4</h3>
          </Col>
        </Row>
        <form onSubmit={onSubmit}>
          <Row>
            <Col>
              <img
                src="https://via.placeholder.com/190x190"
                alt="상품 이미지"
              />
            </Col>
            <Col>
              <img
                src="https://via.placeholder.com/190x190"
                alt="상품 이미지"
              />
            </Col>
            <Col>
              <img
                src="https://via.placeholder.com/190x190"
                alt="상품 이미지"
              />
            </Col>
            <Col>
              <img
                src="https://via.placeholder.com/190x190"
                alt="상품 이미지"
              />
            </Col>
          </Row>
          <Divider margin="2rem" />
          <SellForm product={product} sell={sell} onChange={onChange} />
          <Divider thick="1px" />
          <Row>
            <Col>
              <Button to="/">취소</Button>
            </Col>
            <Col>
              <Button>등록</Button>
            </Col>
          </Row>
        </form>
      </Container>
    </ContentSection>
  );
};

export default Sell;
