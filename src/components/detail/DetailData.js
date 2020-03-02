import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import Colors from '../../styles/Colors';
import Typography from '../../styles/Typography';
import Button from '../common/Button';
import Divider from '../common/Divider';

const DetailDataBlock = styled(Container)`
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

const DetailData = ({ itemName, quickPrice, currentPrice, endDt }) => {
  return (
    <DetailDataBlock>
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
          남은시간
        </Col>
        <Col>
          {endDt}
          {/* TODO: moment.js 사용해서 포맷팅 하기
          0일 00시간 간 00분 00초 (종료: 00-00-00 00:00)
          */}
        </Col>
      </Row>
      <Row>
        <Col className="label" xs={1} sm={2} md={4} lg={4}>
          입찰수
        </Col>
        <Col>
          {/* TODO: 해당 아이템의 입찰 횟수 조회해야함 */}
          <p>25회</p>
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
