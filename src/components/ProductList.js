import React from 'react';
import Product from './Product';
import { Container, Row, Col } from 'react-awesome-styled-grid';

const ProductData = [
  { id: 1, owner: 0 },
  { id: 2, owner: 1 },
  { id: 3, owner: 0 },
  { id: 4, owner: 1 },
  { id: 1, owner: 0 },
  { id: 2, owner: 1 },
  { id: 3, owner: 0 },
  { id: 4, owner: 1 },
  { id: 1, owner: 0 },
  { id: 2, owner: 1 },
  { id: 3, owner: 0 },
  { id: 4, owner: 1 },
];

const ProductList = () => {
  return (
    <Container noGutter>
      <Row debug>
        {ProductData.map(({ id, owner }) => (
          <Col
            debug
            xs={2}
            sm={4}
            md={4}
            lg={3}
            justify="center"
            align="center"
          >
            <Product key={id} id={id} owner={owner} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
