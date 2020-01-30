import React from 'react';
import ProductList from './ProductList';

const CategoryResult = ({ match }) => {
  const { category } = match.params;
  return (
    <div>
      <h1>카테고리 별 상품 페이지</h1>
      <h2>{category}의 추천 상품</h2>
      <ProductList />
    </div>
  );
};

export default CategoryResult;
