import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, ScreenBadge } from 'react-awesome-styled-grid';
import ContentSection from '../common/ContentSection';
import Divider from '../common/Divider';
import Typography from '../../styles/Typography';
import Colors from '../../styles/Colors';
import { MdMoreVert } from 'react-icons/md';
import DetailData from './DetailData';

/*
  NOTE: ContentSection 컴포넌트 안 ContentSectionBlock을 
  react-awesome-styled-grid의 Container로 확장해서 사용하려 했으나
  다시 생각해보니 너무 의존성이 생기는것 같아 하지 않았다.
*/

const ProductDetailBlock = styled(Container)`
  .category-name {
    ${Typography.Headline6};
    color: ${Colors.onSurfaceMedium};
  }

  .sub-title {
    margin-top: 1rem;
  }

  .product-description {
  }
`;

const ProductDetail = () => {
  return (
    <ContentSection>
      <ProductDetailBlock>
        <ScreenBadge />
        <Row justify="space-between">
          <Col className="category-name" xs={1} sm={1} md={2} lg={2}>
            상품 카테고리
          </Col>
          <Col justify="center" xs={1} sm={1} md={1} lg={1}>
            <MdMoreVert style={{ marginLeft: 'auto' }} />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col className="carousel" xs={4} sm={3} md={5} lg={5}>
            <img src="https://via.placeholder.com/520x520" alt="상품 이미지" />
          </Col>
          <Col justify="center" xs={4} sm={5} md={7} lg={7}>
            <DetailData />
          </Col>
        </Row>
        <Row>
          <Col className="sub-title">
            <h3>상품정보</h3>
          </Col>
          <Divider thick="1px" margin="0.75rem" />
        </Row>
        <Row>
          <Col>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            architecto consequuntur! Quo hic culpa quis doloribus autem nihil,
            totam quod laboriosam rem ea quia velit, adipisci similique
            voluptatem eligendi itaque!
          </Col>
        </Row>
        <Row>
          <Col className="sub-title">
            <h3>연관상품</h3>
          </Col>
          <Divider />
        </Row>
        <Row>
          <Col>카드 1</Col>
          <Col>카드 2</Col>
          <Col>카드 3</Col>
          <Col>카드 4</Col>
        </Row>
        <Row>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 1
          </Col>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 2
          </Col>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 3
          </Col>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 4
          </Col>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 5
          </Col>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 6
          </Col>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 7
          </Col>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 8
          </Col>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 9
          </Col>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 10
          </Col>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 11
          </Col>
          <Col debug xs={1} sm={1} md={1} lg={1}>
            Col 12
          </Col>
        </Row>
      </ProductDetailBlock>
    </ContentSection>
  );
};

export default ProductDetail;
