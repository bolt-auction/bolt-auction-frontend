import React, { useRef } from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-awesome-styled-grid';
import { Carousel } from 'react-responsive-carousel';

import Colors from '../../styles/Colors';
import Typography from '../../styles/Typography';
import Elevation from '../../styles/Elevation';
import LoadingSpinner from '../common/LoadingSpinner';
import ContentSection from '../common/ContentSection';
import Divider from '../common/Divider';
import DetailData from './DetailData';
import BidEndModal from './BidEndModal';
import { MdMoreVert } from 'react-icons/md';

/*
 * TODO:
 *  [x]상품삭제 메뉴 추가 (상품 판매자에게만 보여야 함)
 *  [x]상품삭제 기능 추가
 */

const ProductDetailBlock = styled(Container)`
  .category-name {
    ${Typography.Headline6};
    color: ${Colors.onSurfaceMedium};
  }
  .sub-title {
    margin-top: 2rem;
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
  .dropdown-menu {
    margin-left: auto;
    cursor: pointer;
    color: ${Colors.onSurfaceMedium};
  }
`;

const DropdownMenu = styled.div`
  width: 112px;
  padding: 8px 1px;
  z-index: 50;
  position: absolute;
  display: none;
  top: 1.5rem;
  left: -2rem;
  border-radius: 4px;
  background-color: ${Colors.surface};
  box-shadow: ${Elevation.z8};
  .menu-item {
    height: 2rem;
    padding: 0rem 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${Colors.onSurfaceHigh};
    &:hover {
      color: ${Colors.primary};
      background-color: ${Colors.primarySelect};
    }
  }
`;

const ProductDetail = ({
  loading,
  detail,
  detailError,
  auctioned,
  bidPrice,
  bidList,
  ownProduct,
  onChangeBidField,
  onRemoveProduct,
  onChatRoomCreate,
  onReservedPrice,
  onSubmitBid,
}) => {
  const menuEl = useRef(null);

  if (detailError) {
    if (detailError.response && detailError.response.status === 404) {
      return <ContentSection>존재하지 않는 상품입니다.</ContentSection>;
    }
    return <ContentSection>오류가 발생했어요 ㅠㅠ</ContentSection>;
  }

  if (loading || !detail) {
    return <LoadingSpinner />;
  }

  const {
    itemName,
    quickPrice,
    currentPrice,
    minBidPrice,
    endDt,
    category,
    description,
    imagePath,
    bidCount,
    seller,
    end,
  } = detail;

  return (
    <ContentSection>
      {end && (
        <BidEndModal
          ownProduct={ownProduct}
          auctioned={auctioned}
          itemName={itemName}
          onChatRoomCreate={onChatRoomCreate}
          onRemoveProduct={onRemoveProduct}
        />
      )}
      <ProductDetailBlock>
        <Row justify="space-between">
          <Col className="category-name" xs={3} sm={3} md={4} lg={4}>
            {category.supCategoryName}
            {category.name && ` > ${category.name}`}
          </Col>
          {ownProduct && (
            <Col
              justify="center"
              xs={1}
              sm={1}
              md={1}
              lg={1}
              style={{ position: 'relative' }}
            >
              <MdMoreVert
                className="dropdown-menu"
                onClick={() => {
                  menuEl.current.style.display = 'block';
                }}
              />
              <DropdownMenu
                ref={menuEl}
                onMouseLeave={() => {
                  menuEl.current.style.display = 'none';
                }}
              >
                <div className="menu-item" onClick={onRemoveProduct}>
                  삭제
                </div>
              </DropdownMenu>
            </Col>
          )}
        </Row>
        <Divider />
        <Row>
          <Col xs={4} sm={3} md={5} lg={5} align="center" justify="center">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              emulateTouch={true}
            >
              {imagePath &&
                imagePath.map((image, i) => (
                  <div className="product-img" key={i}>
                    <img alt={`상품 이미지 ${i}`} src={image} />
                  </div>
                ))}
            </Carousel>
          </Col>
          <DetailData
            itemName={itemName}
            quickPrice={quickPrice}
            currentPrice={currentPrice}
            minBidPrice={minBidPrice}
            endDt={endDt}
            bidCount={bidCount}
            seller={seller}
            bidList={bidList}
            bidPrice={bidPrice}
            onChangeBidField={onChangeBidField}
            onSubmitBid={onSubmitBid}
            onReservedPrice={onReservedPrice}
            ownProduct={ownProduct}
          />
        </Row>
        <Row>
          <Col className="sub-title">
            <h2>상품정보</h2>
          </Col>
          <Divider thick="1px" margin="0.75rem" />
        </Row>
        <Row>
          <Col className="product-description">
            <p>{description}</p>
          </Col>
        </Row>
        {/* <Row>
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
        </Row> */}
      </ProductDetailBlock>
    </ContentSection>
  );
};

export default ProductDetail;
