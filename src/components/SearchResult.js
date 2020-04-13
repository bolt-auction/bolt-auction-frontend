import React, { useState, useEffect } from 'react';
import ProductList from './productCard/ProductList';
import * as Styled from '../styles/Styled';
import Tab from './common/Tab';

const SearchResult = ({ keyword, items, order, search }) => {
  const [activeTab, setActiveTab] = useState(order);

  useEffect(() => {
    search(keyword, order);
  }, [keyword, order, search]);

  const filter = [
    {
      name: '인기순',
      params: `/search?keyword=${keyword}&order=bidCount,asc`,
      id: 'bidCount,asc',
    },
    {
      name: '최신순',
      params: `/search?keyword=${keyword}&order=createDt,asc`,
      id: 'createDt,asc',
    },
    {
      name: '마감 임박순',
      params: `/search?keyword=${keyword}&order=endDt,asc`,
      id: 'endDt,asc',
    },
    {
      name: '낮은 가격순',
      params: `/search?keyword=${keyword}&order=currentPrice,asc`,
      id: 'currentPrice,asc',
    },
    {
      name: '높은 가격순',
      params: `/search?keyword=${keyword}&order=currentPrice,desc`,
      id: 'currentPrice,desc',
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
        <ProductList items={items['_embedded']?.itemList} />
      </Styled.ContentsBox>
    </div>
  );
};

export default SearchResult;
