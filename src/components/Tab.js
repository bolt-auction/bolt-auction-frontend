import React from 'react';
import { Container, Row, Col, Hidden } from 'react-awesome-styled-grid';

const Tab = props => {
  return (
    <Container style={{ padding: 0 }}>
      <Hidden sm xs>
        <Row className="tabNav" style={{ padding: 0 }}>
          <Col className="tab" align="center" lg={1.5} md={1.5} sm={1.5} xs={1}>
            인기순
          </Col>
          <Col className="tab" align="center" lg={1.5} md={1.5} sm={1.5} xs={1}>
            최신순
          </Col>
          <Col className="tab" align="center" lg={1.5} md={1.5} sm={1.5} xs={1}>
            마감 임박순
          </Col>
          <Col className="tab" align="center" lg={1.5} md={1.5} sm={1.5} xs={1}>
            낮은 가격순
          </Col>
          <Col className="tab" align="center" lg={1.5} md={1.5} sm={1.5} xs={1}>
            높은 가격순
          </Col>
        </Row>
      </Hidden>
    </Container>
  );
};

export default Tab;
