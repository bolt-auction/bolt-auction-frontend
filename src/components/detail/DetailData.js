import React, { useState } from 'react';
import { Col, Row } from 'react-awesome-styled-grid';
import styled from 'styled-components';
import Moment from 'react-moment';

import Colors from '../../styles/Colors';
import Typography from '../../styles/Typography';
import PriceFormat from '../common/PriceFormat';
import Button from '../common/Button';
import Divider from '../common/Divider';
import BidModal from './BidModal';
import { Link } from 'react-router-dom';
// import ModalPortal from '../common/ModalPortal';

/*
 * FIXME:
 *  [x]DetailDataBlock을 Container에서 <Col />로 변경 하기, 그에 따른 ProductDetail도 수정
 * TODO:
 *  [x]가격 포맷팅 기능 추가 (예: 25,000원)
 *  [x]유저 네임 가져오기, auth.seller.memberName
 *  [x]유저 이미지 가져오기, (아마도)auth.seller.imagePath
 */

const DetailDataBlock = styled(Col)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 480px;

  .product {
    &-title {
      ${Typography.Headline5};
      color: ${Colors.onSurfaceHigh};
      line-height: 28px;
      margin-bottom: 1rem;
    }
  }

  .label {
    ${Typography.Headline6};
    color: ${Colors.onSurfaceMedium};
    margin-bottom: 1rem;
  }

  .current-price {
    ${Typography.Headline4};
    color: ${Colors.onSurfaceHigh};
    margin-bottom: 1rem;
    &-label {
      ${Typography.Headline6};
      color: ${Colors.onSurfaceHigh};
    }
  }

  .quick-price {
    ${Typography.Headline5};
    color: ${Colors.onSurfaceMedium};
    margin-bottom: 1rem;
  }

  .seller {
    min-width: 144px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    img {
      border-radius: 50%;
      width: 48px;
      height: 48px;
    }
  }
`;

const DetailData = ({
  seller,
  itemName,
  currentPrice,
  quickPrice,
  minBidPrice,
  endDt,
  bidCount,
  bidPrice,
  bidList,
  onChangeBidField,
  onSubmitBid,
  onReservedPrice,
  ownProduct,
}) => {
  const [bidModal, setBidModal] = useState(false);
  const [bidListModal, setBidListModal] = useState(false);

  return (
    <DetailDataBlock justify="center" xs={4} sm={4} md={6} lg={6}>
      <Row align="center">
        <Col xs={1} sm={2} md={4} lg={4}>
          <Link to={`/store/${seller.memberId}`}>
            <div className="seller">
              <img
                src={
                  seller.imagePath
                    ? seller.imagePath
                    : `https://avatars.dicebear.com/v2/identicon/${seller.memberName}${seller.memberId}.svg`
                }
                alt={seller.memberName}
              />
              <p>{seller.memberName}</p>
            </div>
          </Link>
        </Col>
      </Row>
      <Divider thick="1px" />
      <Row>
        <Col>
          <h2 className="product-title">{itemName}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="current-price-label" xs={1} sm={2} md={4} lg={4}>
          현재가
        </Col>
        <Col className="current-price">
          <PriceFormat price={currentPrice} />
        </Col>
      </Row>
      <Row>
        <Col className="label" xs={1} sm={2} md={4} lg={4}>
          즉시 낙찰가
        </Col>
        <Col className="quick-price">
          <PriceFormat price={quickPrice} />
        </Col>
      </Row>
      <Row>
        <Col className="label" xs={1} sm={2} md={4} lg={4}>
          경매 종료
        </Col>
        <Col>
          <div>
            <Moment date={endDt} toNow />{' '}
            <Moment date={endDt} format="[(]YYYY-MM-DD HH:mm[)]" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="label" xs={1} sm={2} md={4} lg={4}>
          입찰수
        </Col>
        <Col xs={1} sm={1} md={2} lg={2}>
          <p>{bidCount}회</p>
        </Col>
        <Col xs={1} sm={2} md={3} lg={3}>
          <Button outline onClick={() => setBidListModal(true)}>
            입찰기록
          </Button>
          {bidListModal && (
            <BidModal
              type="bidList"
              isVisible={bidListModal}
              setIsVisible={setBidListModal}
              bidList={bidList}
            />
          )}
        </Col>
      </Row>
      <Divider thick="1px" />
      <Row justify="center" align="center">
        <Col xs={2} sm={4} md={6} lg={6}>
          <Button primary onClick={onReservedPrice} disabled={ownProduct}>
            즉시낙찰
          </Button>
        </Col>
        <Col xs={2} sm={4} md={6} lg={6}>
          <Button
            primary
            onClick={() => setBidModal(true)}
            disabled={ownProduct}
          >
            입찰하기
          </Button>
          {bidModal && (
            <BidModal
              type="bid"
              isVisible={bidModal}
              setIsVisible={setBidModal}
              endDt={endDt}
              itemName={itemName}
              quickPrice={quickPrice}
              currentPrice={currentPrice}
              minBidPrice={minBidPrice}
              bidPrice={bidPrice}
              onChangeBidField={onChangeBidField}
              onSubmitBid={onSubmitBid}
            />
          )}
        </Col>
      </Row>
    </DetailDataBlock>
  );
};

export default DetailData;
