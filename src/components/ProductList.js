import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-awesome-styled-grid';

const ProductData = [
  { id: 1, owner: 0 },
  { id: 2, owner: 1 },
  { id: 3, owner: 0 },
  { id: 4, owner: 1 },
  { id: 5, owner: 0 },
  { id: 6, owner: 1 },
  { id: 7, owner: 0 },
  { id: 8, owner: 1 },
  { id: 9, owner: 0 },
  { id: 10, owner: 1 },
  { id: 11, owner: 0 },
  { id: 12, owner: 1 },
];

const ProductList = () => {
  return (
    <Container style={{ padding: 0 }}>
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
            key={`product-${id}`}
          >
            <ProductCard id={id} owner={owner} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
