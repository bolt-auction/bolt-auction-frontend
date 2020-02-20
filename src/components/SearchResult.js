import React from 'react';
import qs from 'qs';
import ProductList from './ProductList';
import * as Styled from '../styles/Styled';

const SearchResult = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const item = query.item;
  return (
    <div>
      <Styled.Title>
        <h2>{item}의 검색 결과입니다.</h2>
      </Styled.Title>
      <Styled.ContentsBox>
        <ProductList />
      </Styled.ContentsBox>
    </div>
  );
};

export default SearchResult;
