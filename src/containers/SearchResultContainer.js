import React from 'react';
import qs from 'qs';

import SearchResult from '../components/SearchResult';
import { connect } from 'react-redux';

const SearchResultContainer = ({ location, items }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const keyword = query.keyword;
  return <SearchResult keyword={keyword} items={items} />;
};

export default connect(({ item }) => ({ items: item.searchedItems }))(
  SearchResultContainer,
);
