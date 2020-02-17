import React from 'react';
import ProductList from './ProductList';

const CategoryResult = ({ match }) => {
  const { category } = match.params;
  return (
    <div style={{ marginTop: 108 }}>
      <h1 className="non-main-title">{category}</h1>
      <h2>{category}의 추천 상품</h2>
      <ProductList />
      <ProductList />
    </div>
  );
};

export default CategoryResult;
