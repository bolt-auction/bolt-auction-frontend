import React from 'react';
import qs from 'qs';
import ProductList from './ProductList';
import * as Styled from '../styles/Styled';
import Tab from './Tab';

const SearchResult = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const item = query.item;
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
        <h2>{item}의 검색 결과입니다.</h2>
      </Styled.Title>
      <Styled.ContentsBox>
        <Tab menu={filter} align="flex-start" />
        <ProductList />
      </Styled.ContentsBox>
    </div>
  );
};

export default SearchResult;
