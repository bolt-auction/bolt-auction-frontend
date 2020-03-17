import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-awesome-styled-grid';
import { Carousel } from 'react-responsive-carousel';

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Colors from '../../styles/Colors';
import Typography from '../../styles/Typography';
import ContentSection from '../common/ContentSection';
import Divider from '../common/Divider';
import DetailData from './DetailData';
import { MdMoreVert } from 'react-icons/md';

/*
 * TODO:
 *  [x]상품삭제 메뉴 추가 (상품 판매자에게만 보여야 함)
 *  []상품삭제 기능 추가
 */

const ProductDetailBlock = styled(Container)`
  .category-name {
    ${Typography.Headline6};
    color: ${Colors.onSurfaceMedium};
  }

  .sub-title {
    margin-top: 2rem;
    /* padding-left: 8rem;
    padding-right: 8rem; */
  }

  .product-img {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .product-description {
    height: 128px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const ProductDetail = ({ detail, userId, error, loading }) => {
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
    seller,
  } = detail;

  return (
    <ContentSection>
      <ProductDetailBlock>
        <Row justify="space-between">
          <Col className="category-name" xs={1} sm={1} md={2} lg={2}>
            {category.name}
          </Col>
          <Col justify="center" xs={1} sm={1} md={1} lg={1}>
            {seller.memberId === userId && (
              <MdMoreVert style={{ marginLeft: 'auto', cursor: 'pointer' }} />
            )}
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={4} sm={3} md={5} lg={5}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              emulateTouch={true}
            >
              {imagePath &&
                imagePath.map(image => (
                  <div className="product-img">
                    <img alt="상품 이미지" src={image} />
                  </div>
                ))}
            </Carousel>
          </Col>
          <DetailData
            itemName={itemName}
            quickPrice={quickPrice}
            currentPrice={currentPrice}
            endDt={endDt}
            bidCount={bidCount}
            seller={seller}
          />
        </Row>
        <Row>
          <Col className="sub-title">
            <h2>상품정보</h2>
          </Col>
          <Divider thick="1px" margin="0.75rem" />
        </Row>
        <Row>
          <Col className="product-description">{description}</Col>
        </Row>
        <Row>
          <Col className="sub-title">
            <h2>연관상품</h2>
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
