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
  } = detail;

  return (
    <ContentSection>
      <ProductDetailBlock>
        <ScreenBadge />
        <Row justify="space-between">
          <Col className="category-name" xs={1} sm={1} md={2} lg={2}>
            {category.name}
          </Col>
          <Col justify="center" xs={1} sm={1} md={1} lg={1}>
            {/* TODO: 상품수정, 상품삭제 기능 메뉴 추가 */}
            <MdMoreVert style={{ marginLeft: 'auto' }} />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col className="carousel" xs={4} sm={3} md={5} lg={5}>
            {/* TODO: 캐로샐 적용하고 imagePath에서 이미지 가지고 오기 */}
            <img src="https://via.placeholder.com/520x520" alt="상품 이미지" />
          </Col>
          <Col justify="center" xs={4} sm={5} md={7} lg={7}>
            <DetailData
              itemName={itemName}
              quickPrice={quickPrice}
              currentPrice={currentPrice}
              endDt={endDt}
            />
          </Col>
        </Row>
        <Row>
          <Col className="sub-title">
            <h3>상품정보</h3>
          </Col>
          <Divider thick="1px" margin="0.75rem" />
        </Row>
        <Row>
          <Col>{description}</Col>
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
