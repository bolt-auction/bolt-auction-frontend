import React from 'react';
import ProductList from './ProductList';

const StoreProducts = ({ items }) => {
  return (
    <div style={{ marginTop: 24 }}>
      <ProductList items={items['_embedded']?.itemDtoList} />
    </div>
  );
};

export default StoreProducts;
