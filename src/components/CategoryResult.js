import React from 'react';

const CategoryResult = ({ match }) => {
  const { category } = match.params;
  return (
    <div>
      <h1>카테고리 별 상품 페이지</h1>
      <h2>{category}의 추천 상품</h2>
    </div>
  );
};

export default CategoryResult;
