import React from 'react';
import ProductList from './ProductList';
import * as Styled from '../styles/Styled';

const CategoryResult = ({ match }) => {
  const { category } = match.params;
  return (
    <div>
      <Styled.Title>
        <h1 className="non-main-title">{category}</h1>
        <h2>{category}의 추천 상품</h2>
      </Styled.Title>
      <Styled.ContentsBox>
        <ProductList />
      </Styled.ContentsBox>
    </div>
  );
};

export default CategoryResult;
