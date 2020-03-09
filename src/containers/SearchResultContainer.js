import React from 'react';
import qs from 'qs';

import SearchResult from '../components/SearchResult';
import { connect } from 'react-redux';

const SearchResultContainer = ({ location, items }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const keyword = query.keyword;

  const order = query.order;
  return <SearchResult keyword={keyword} items={items} order={order} />;
};

export default React.memo(
  connect(({ item }) => ({ items: item.searchedItems }))(SearchResultContainer),
);
