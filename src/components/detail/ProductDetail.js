import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-awesome-styled-grid';

import Colors from '../../styles/Colors';
import Typography from '../../styles/Typography';
import ContentSection from '../common/ContentSection';
import Divider from '../common/Divider';
import DetailData from './DetailData';
import { MdMoreVert } from 'react-icons/md';

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

const ProductDetail = ({ detail, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <ContentSection>존재하지 않는 상품입니다.</ContentSection>;
    }
    return <ContentSection>오류가 발생했어요 ㅠㅠ</ContentSection>;
  }

  if (loading || !detail) {
    return null;
  }

  const {
    itemName,
    quickPrice,
    currentPrice,
    endDt,
    category,
    description,
    imagePath,
    bidCount,
  } = detail;

  return (
    <ContentSection>
      <ProductDetailBlock>
        <Row justify="space-between">
          <Col className="category-name" xs={1} sm={1} md={2} lg={2}>
            {category.name}
          </Col>
          <Col justify="center" xs={1} sm={1} md={1} lg={1}>
            {/* TODO: 상품수정, 상품삭제 기능 메뉴 추가 상품 판매자에게만 보여야 함*/}
            <MdMoreVert style={{ marginLeft: 'auto' }} />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col className="carousel" xs={4} sm={3} md={5} lg={5}>
            {/* <img src="https://via.placeholder.com/520x520" alt="상품 이미지" /> */}
            {/* TODO: 캐로샐 적용하고 imagePath에서 이미지 가지고 오기 */}
            <img src={imagePath[0]} alt="상품 이미지" />
          </Col>
          <DetailData
            itemName={itemName}
            quickPrice={quickPrice}
            currentPrice={currentPrice}
            endDt={endDt}
            bidCount={bidCount}
          />
        </Row>
        <Row>
          <Col className="sub-title">
            <h3>상품정보</h3>
          </Col>
          <Divider thick="1px" margin="0.75rem" />
        </Row>
        <Row>
          <Col className="product-description">{description}</Col>
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
      </ProductDetailBlock>
    </ContentSection>
  );
};

export default ProductDetail;
