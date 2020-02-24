import React, { useEffect } from 'react';

import ProductList from './ProductList';
import * as Styled from '../styles/Styled';
import Tab from './Tab';
import { useState } from 'react';

const CategoryResult = ({ match, order, id, items, getItems }) => {
  const { category } = match.params;
  const [activeTab, setActiveTab] = useState('popular');

  useEffect(() => {
    console.log('order', order);
    getItems(id);
  }, [getItems, id, order]);

  const filter = [
    {
      name: '인기순',
      params: `/categories/${category}?order=popular`,
      id: 'popular',
    },
    {
      name: '최신순',
      params: `/categories/${category}?order=date`,
      id: 'date',
    },
    {
      name: '마감 임박순',
      params: `/categories/${category}?order=finish`,
      id: 'finish',
    },
    {
      name: '낮은 가격순',
      params: `/categories/${category}?order=price_asc`,
      id: 'price_asc',
    },
    {
      name: '높은 가격순',
      params: `/categories/${category}?order=price_desc`,
      id: 'price_desc',
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
        <ProductList items={items['_embedded']?.itemDtoList} />
      </Styled.ContentsBox>
    </div>
  );
};

export default CategoryResult;
