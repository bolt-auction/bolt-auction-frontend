import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductBox = styled.div`
  background: skyblue;
  width: 100px;
  height: 150px;
  margin-right: 15px;
  &:last-child() {
    margin-right: 0;
  }
`;

const Product = ({ id, owner }) => {
  return (
    <Link to={`/products/${id}?owner=${owner}`}>
      <ProductBox>상품</ProductBox>
    </Link>
  );
};

export default Product;
