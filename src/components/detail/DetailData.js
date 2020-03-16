import React from 'react';
import { Col, Row } from 'react-awesome-styled-grid';
import styled from 'styled-components';
import Moment from 'react-moment';

import Colors from '../../styles/Colors';
import Typography from '../../styles/Typography';
import Button from '../common/Button';
import Divider from '../common/Divider';

// FIXME: [x]DetailDataBlock을 Container에서 <Col />로 변경 하기, 그에 따른 ProductDetail도 수정
const DetailDataBlock = styled(Col)`
  padding: 0px !important;
  margin-top: 1rem;
  margin-bottom: 1rem;

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
`;

const DetailData = ({
  itemName,
  quickPrice,
  currentPrice,
  endDt,
  bidCount,
}) => {
  return (
    <DetailDataBlock justify="center" xs={4} sm={5} md={7} lg={7}>
      <h2 className="product-title">{itemName}</h2>
      <Row>
        <Col className="current-price-label" xs={1} sm={2} md={4} lg={4}>
          현재가
        </Col>
        {/* TODO: 가격 포맷팅 기능 추가 (예: 25,000원) */}
        <Col className="current-price">{currentPrice}원</Col>
      </Row>
      <Row>
        <Col className="label" xs={1} sm={2} md={4} lg={4}>
          즉시 낙찰가
        </Col>
        <Col className="quick-price">{quickPrice}원</Col>
      </Row>
      <Row>
        <Col className="label" xs={1} sm={2} md={4} lg={4}>
          경매 종료
        </Col>
        <Col>
          <div>
            <Moment date={endDt} toNow />
            <Moment date={endDt} format="[(]YYYY-MM-DD HH:mm[)]" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="label" xs={1} sm={2} md={4} lg={4}>
          입찰수
        </Col>
        <Col>
          {/* TODO: 해당 아이템의 입찰 횟수 조회해야함 */}
          <p>{bidCount}</p>
        </Col>
      </Row>
      <Divider thick="1px" />
      {/* 
      TODO: 유저 이미지 가져오기, auth.user.store.imagePath
      TODO: 유저 네임 가져오기, auth.user.name
      <Row>
        <Col>
          <div>
            <img
              src="https://via.placeholder.com/40x40"
              alt="프로필 이미지"
              style={{ width: '40px' }}
            />
            판매자 아이디
          </div>
        </Col>
      </Row> 
      */}
      <Row>
        <Col>
          <Button primary>즉시낙찰</Button>
        </Col>
        <Col>
          <Button primary>입찰하기</Button>
        </Col>
      </Row>
    </DetailDataBlock>
  );
};

export default DetailData;
