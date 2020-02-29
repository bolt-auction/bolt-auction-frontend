import React, { useState } from 'react';
import ProductList from './ProductList';
import * as Styled from '../styles/Styled';
import Tab from './Tab';

const SearchResult = ({ keyword, items, order }) => {
  const [activeTab, setActiveTab] = useState(order);

  const filter = [
    {
      name: '인기순',
      params: `/search?keyword=${keyword}&order=popular`,
      id: 'popular',
    },
    {
      name: '최신순',
      params: `/search?keyword=${keyword}&order=date`,
      id: 'date',
    },
    {
      name: '마감 임박순',
      params: `/search?keyword=${keyword}&order=finish`,
      id: 'finish',
    },
    {
      name: '낮은 가격순',
      params: `/search?keyword=${keyword}&order=price_asc`,
      id: 'price_asc',
    },
    {
      name: '높은 가격순',
      params: `/search?keyword=${keyword}&order=price_desc`,
      id: 'price_desc',
    },
  ];
  return (
    <div>
      <Styled.Title>
        <h2>{keyword}의 검색 결과입니다.</h2>
      </Styled.Title>
      <Styled.ContentsBox>
        <Tab
          menu={filter}
          align="flex-start"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <ProductList items={items['_embedded']?.itemDtoList} />
      </Styled.ContentsBox>
    </div>
  );
};

export default SearchResult;
