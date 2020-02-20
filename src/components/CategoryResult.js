import React, { useEffect } from 'react';
import ProductList from './ProductList';
import * as Styled from '../styles/Styled';
import Tab from './Tab';

const CategoryResult = ({ match, id, items, getItems }) => {
  const { category } = match.params;

  useEffect(() => {
    getItems(id);
  }, [getItems, id]);

  const filter = [
    { name: '인기순', params: '' },
    { name: '최신순', params: '' },
    { name: '마감 임박순', params: '' },
    { name: '낮은 가격순', params: '' },
    { name: '높은 가격순', params: '' },
  ];
  return (
    <div>
      <Styled.Title>
        <h1 className="non-main-title">{category}</h1>
        <h2>{category}의 추천 상품</h2>
      </Styled.Title>
      <Styled.ContentsBox>
        <Tab menu={filter} align="flex-start" />
        <Styled.Divider />
        <ProductList items={items['_embedded']?.itemDtoList} />
      </Styled.ContentsBox>
    </div>
  );
};

export default CategoryResult;
