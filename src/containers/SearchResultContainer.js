import React, { useEffect } from 'react';
import qs from 'qs';

import SearchResult from '../components/SearchResult';
import { connect } from 'react-redux';
import { getItems, unloadSearchResult } from '../modules/item';

const SearchResultContainer = ({
  location,
  items,
  getItems,
  unloadSearchResult,
}) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const keyword = query.keyword;
  const order = query.order;

  useEffect(() => {
    return () => unloadSearchResult();
  }, [unloadSearchResult]);

  return (
    <SearchResult
      keyword={keyword}
      items={items}
      order={order}
      search={getItems}
    />
  );
};

export default React.memo(
  connect(({ item }) => ({ items: item.searchedItems }), {
    getItems,
    unloadSearchResult,
  })(SearchResultContainer),
);
