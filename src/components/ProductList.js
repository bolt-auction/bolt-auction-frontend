import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const Products = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const ProductData = [
  { id: 1, owner: 0 },
  { id: 2, owner: 1 },
  { id: 3, owner: 0 },
  { id: 4, owner: 1 }
];
const ProductList = () => {
  return (
    <Products>
      {ProductData.map(({ id, owner }) => (
        <Product key={id} id={id} owner={owner} />
      ))}
    </Products>
  );
};

export default ProductList;
