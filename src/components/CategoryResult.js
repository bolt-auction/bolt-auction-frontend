import React from 'react';
import ProductList from './ProductList';
import * as Styled from '../styles/Styled';
import { Container, Row, Col, Hidden } from 'react-awesome-styled-grid';

const CategoryResult = ({ match }) => {
  const { category } = match.params;
  return (
    <div>
      <Styled.Title>
        <h1 className="non-main-title">{category}</h1>
        <h2>{category}의 추천 상품</h2>
      </Styled.Title>
      <Styled.ContentsBox>
        <Container fluid style={{ padding: 0 }}>
          <Hidden sm xs>
            <Row className="tabNav" style={{ padding: 0 }}>
              <Col
                className="tab"
                align="center"
                lg={1.5}
                md={1.5}
                sm={1.5}
                xs={1}
              >
                인기순
              </Col>
              <Col
                className="tab"
                align="center"
                lg={1.5}
                md={1.5}
                sm={1.5}
                xs={1}
              >
                최신순
              </Col>
              <Col
                className="tab"
                align="center"
                lg={1.5}
                md={1.5}
                sm={1.5}
                xs={1}
              >
                마감 임박순
              </Col>
              <Col
                className="tab"
                align="center"
                lg={1.5}
                md={1.5}
                sm={1.5}
                xs={1}
              >
                낮은 가격순
              </Col>
              <Col
                className="tab"
                align="center"
                lg={1.5}
                md={1.5}
                sm={1.5}
                xs={1}
              >
                높은 가격순
              </Col>
            </Row>
          </Hidden>
        </Container>
        <Styled.Divider />
        <ProductList />
      </Styled.ContentsBox>
    </div>
  );
};

export default CategoryResult;
