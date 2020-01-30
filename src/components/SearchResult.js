import React from 'react';
import qs from 'qs';

const SearchResult = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const item = query.item;
  return (
    <div>
      <h1>결과 페이지</h1>
      <h2>{item}의 검색 결과입니다.</h2>
    </div>
  );
};

export default SearchResult;
