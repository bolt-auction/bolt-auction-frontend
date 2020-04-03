import React, { useEffect } from 'react';

import ProductList from './ProductList';
import * as Styled from '../styles/Styled';
import Tab from './Tab';
import { useState } from 'react';

const CategoryResult = ({ match, order, id, items, getItems }) => {
  const { category } = match.params;
  const [activeTab, setActiveTab] = useState(order);

  useEffect(() => {
    getItems(id, order);
  }, [getItems, id, order]);

  const filter = [
    {
      name: '인기순',
      params: `/categories/${category}?order=bidCount,desc`,
      id: 'bidCount,desc',
    },
    {
      name: '최신순',
      params: `/categories/${category}?order=createDt,asc`,
      id: 'createDt,asc',
    },
    {
      name: '마감 임박순',
      params: `/categories/${category}?order=endDt,asc`,
      id: 'endDt,asc',
    },
    {
      name: '낮은 가격순',
      params: `/categories/${category}?order=currentPrice,asc`,
      id: 'currentPrice,asc',
    },
    {
      name: '높은 가격순',
      params: `/categories/${category}?order=currentPrice,desc`,
      id: 'currentPrice,desc',
    },
  ];

  return (
    <div>
      <Styled.Title>
        <h1 className="non-main-title">{category}</h1>
        <h2>{category}의 추천 상품</h2>
      </Styled.Title>
      <Styled.ContentsBox>
        <Tab
          menu={filter}
          align="flex-start"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Styled.Divider />
        <ProductList items={items['_embedded']?.itemList} />
      </Styled.ContentsBox>
    </div>
  );
};

export default CategoryResult;
