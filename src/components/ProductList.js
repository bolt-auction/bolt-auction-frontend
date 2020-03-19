import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col, ScreenBadge } from 'react-awesome-styled-grid';

const ProductData = [
  { itemId: 1, owner: 0 },
  { itemId: 2, owner: 1 },
  { itemId: 3, owner: 0 },
  { itemId: 4, owner: 1 },
  { itemId: 5, owner: 0 },
  { itemId: 6, owner: 1 },
  { itemId: 7, owner: 0 },
  { itemId: 8, owner: 1 },
  { itemId: 9, owner: 0 },
  { itemId: 10, owner: 1 },
  { itemId: 11, owner: 0 },
  { itemId: 12, owner: 1 },
];

const ProductList = ({ items }) => {
  console.log('productList: ', items);
  return (
    <Container style={{ padding: 0 }}>
      <ScreenBadge />
      <Row>
        {(items?.length > 0 ? items : ProductData).map(item => (
          <Col
            xs={2}
            sm={2}
            md={3}
            lg={3}
            justify="center"
            align="center"
            key={`product-${item.itemId}`}
          >
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
