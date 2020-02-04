import React from 'react';
import qs from 'qs';
import ProductList from './ProductList';
import { MainBox, NonMainConatiner, MainContainer, Divider } from './Main';
import Header from './Header';

const SearchResult = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const item = query.item;
  return (
    <MainBox>
      <Header />
      <NonMainConatiner>
        <h1 className="non-main-title">{item}의 검색 결과입니다.</h1>
        <MainContainer>
          <Divider />
          <ProductList />
          <ProductList />
        </MainContainer>
      </NonMainConatiner>
    </MainBox>
  );
};

export default SearchResult;
