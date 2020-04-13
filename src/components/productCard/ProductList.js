import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-awesome-styled-grid';

const ProductData = [
  { itemId: 1, itemName: 'loading..', currentPrice: 1000 },
  { itemId: 2, itemName: 'loading..', currentPrice: 1000 },
  { itemId: 3, itemName: 'loading..', currentPrice: 1000 },
  { itemId: 4, itemName: 'loading..', currentPrice: 1000 },
  { itemId: 5, itemName: 'loading..', currentPrice: 1000 },
  { itemId: 6, itemName: 'loading..', currentPrice: 1000 },
  { itemId: 7, itemName: 'loading..', currentPrice: 1000 },
  { itemId: 8, itemName: 'loading..', currentPrice: 1000 },
  { itemId: 9, itemName: 'loading..', currentPrice: 1000 },
  { itemId: 10, itemName: 'loading..', currentPrice: 1000 },
  { itemId: 11, itemName: 'loading..', currentPrice: 1000 },
  { itemId: 12, itemName: 'loading..', currentPrice: 1000 },
];

const ProductList = ({ items }) => {
  return (
    <Container style={{ padding: 0 }}>
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
