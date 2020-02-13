import React from 'react';
import ProductList from './ProductList';

const CategoryResult = ({ match }) => {
  const { category } = match.params;
  return (
    <>
      <h1 className="non-main-title">{category}</h1>
      <h2>{category}의 추천 상품</h2>
      <ProductList />
      <ProductList />
    </>
  );
};

export default CategoryResult;
