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

const DetailData = () => {
  return (
    <DetailDataBlock>
      <h2 className="product-title">
        상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명
      </h2>
      <Row>
        <Col className="current-price-label" xs={1} sm={2} md={4} lg={4}>
          현재가
        </Col>
        <Col className="current-price">10,000원</Col>
      </Row>
      <Row>
        <Col className="label" xs={1} sm={2} md={4} lg={4}>
          즉시 낙찰가
        </Col>
        <Col className="quick-price">20,000원</Col>
      </Row>
      <Row>
        <Col className="label" xs={1} sm={2} md={4} lg={4}>
          남은시간
        </Col>
        <Col>0일 00시간 간 00분 00초 (종료: 00-00-00 00:00)</Col>
      </Row>
      <Row>
        <Col className="label" xs={1} sm={2} md={4} lg={4}>
          입찰수
        </Col>
        <Col>
          <p>25회</p>
        </Col>
      </Row>
      <Divider thick="1px" />
      {/* <Row>
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
      </Row> */}
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
