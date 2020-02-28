import React from 'react';
import ProductList from './ProductList';
import { useEffect } from 'react';

const StoreProducts = ({ items, setActiveTab }) => {
  useEffect(() => {
    setActiveTab('product');
  }, [setActiveTab]);
  return (
    <div style={{ marginTop: 24 }}>
      <ProductList items={items['_embedded']?.itemDtoList} />
    </div>
  );
};

export default StoreProducts;
