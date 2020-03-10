import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col, ScreenBadge } from 'react-awesome-styled-grid';

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
            key={`product-${item.id}`}
          >
            <ProductCard
              id={item.itemId}
              name={item.itemName}
              currentPrice={item.currentPrice}
              owner={item.sellerId}
              imageArr={item.imagePath}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
