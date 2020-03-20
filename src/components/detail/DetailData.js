import React, { useState } from 'react';
import { Col, Row } from 'react-awesome-styled-grid';
import styled from 'styled-components';
import Moment from 'react-moment';

import { priceFormat } from '../../lib/util';

import Colors from '../../styles/Colors';
import Typography from '../../styles/Typography';
import Button from '../common/Button';
import Divider from '../common/Divider';
import ModalPortal from '../common/ModalPortal';
import BidListModal from './BidListModal';
import BidModal from './BidModal';

/*
 * FIXME:
 *  [x]DetailDataBlock을 Container에서 <Col />로 변경 하기, 그에 따른 ProductDetail도 수정
 * TODO:
 *  [x]가격 포맷팅 기능 추가 (예: 25,000원)
 *  [x]유저 네임 가져오기, auth.seller.memberName
 *  []유저 이미지 가져오기, auth.seller.imagePath
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
    /* width: 100%; */
    min-width: 128px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    img {
      border-radius: 50%;
    }
  }
`;

const DetailData = ({
  itemName,
  quickPrice,
  currentPrice,
  endDt,
  bidCount,
  seller,
}) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    const rootStyle = document.getElementById('root').style;
    if (!modal) {
      setModal(true);
      rootStyle.width = '100%';
      rootStyle.height = '100%';
      rootStyle.position = 'fixed';
    } else {
      setModal(false);
      rootStyle.width = '';
      rootStyle.height = '';
      rootStyle.position = '';
    }
  };

  return (
    <DetailDataBlock justify="center" xs={4} sm={5} md={7} lg={7}>
      <Row align="center">
        <Col xs={1} sm={2} md={4} lg={4}>
          <div className="seller">
            <img
              src="https://via.placeholder.com/40x40"
              alt="프로필 이미지"
              style={{ width: '48px' }}
            />
            <p>{seller.memberName}</p>
          </div>
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
        <Col className="current-price">{priceFormat(currentPrice)}원</Col>
      </Row>
      <Row>
        <Col className="label" xs={1} sm={2} md={4} lg={4}>
          즉시 낙찰가
        </Col>
        <Col className="quick-price">{priceFormat(quickPrice)}원</Col>
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
        <Col xs={1} sm={1} md={1} lg={1}>
          <p>{bidCount}회</p>
        </Col>
        <Col xs={1} sm={2} md={2} lg={2}>
          <Button outline>입찰기록</Button>
          <Button outline onClick={handleModal}>
            입찰기록
          </Button>
          {modal && (
            <ModalPortal>
              <BidListModal handleModal={handleModal} />
            </ModalPortal>
          )}
        </Col>
      </Row>
      <Divider thick="1px" />
      <Row justify="center" align="center">
        <Col xs={2} sm={3} md={6} lg={6}>
          <Button disabled>즉시낙찰</Button>
        </Col>
        <Col xs={2} sm={3} md={6} lg={6}>
          <Button primary onClick={handleModal}>
            입찰하기
          </Button>
          {/* {modal && (
            <ModalPortal>
              <BidModal handleModal={handleModal} />
            </ModalPortal>
          )} */}
        </Col>
      </Row>
    </DetailDataBlock>
  );
};

export default DetailData;
