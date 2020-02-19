import React, { useEffect } from 'react';
import ProductList from './ProductList';
import * as Styled from '../styles/Styled';
import Tab from './Tab';

const CategoryResult = ({ match, id, items, getItems }) => {
  const { category } = match.params;
  useEffect(() => {
    getItems(id);
  });
  return (
    <div>
      <Styled.Title>
        <h1 className="non-main-title">{category}</h1>
        <h2>{category}의 추천 상품</h2>
      </Styled.Title>
      <Styled.ContentsBox>
        <Tab />
        <Styled.Divider />
        <ProductList items={items} />
      </Styled.ContentsBox>
    </div>
  );
};

export default CategoryResult;
