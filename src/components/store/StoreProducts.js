import React from 'react';
import ProductList from '../productCard/ProductList';
import { useEffect } from 'react';

const StoreProducts = ({ items, setActiveTab }) => {
  useEffect(() => {
    setActiveTab('product');
  }, [setActiveTab]);
  return (
    <div style={{ marginTop: 24 }}>
      <ProductList items={items['_embedded']?.itemList} />
    </div>
  );
};

export default StoreProducts;
