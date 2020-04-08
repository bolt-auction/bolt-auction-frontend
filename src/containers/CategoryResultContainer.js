import React, { useEffect } from 'react';
import qs from 'qs';

import CategoryResult from '../components/CategoryResult';
import { connect } from 'react-redux';
import { getCategoryItems, initializeCategoryItems } from '../modules/category';

const CategoryResultContainer = ({
  match,
  location,
  selectedCategory,
  categoryItems,
  getCategoryItems,
  initializeCategoryItems,
}) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const order = query.order;

  useEffect(() => {
    return () => {
      initializeCategoryItems();
    };
  }, [initializeCategoryItems]);

  return (
    <CategoryResult
      match={match}
      order={order}
      id={selectedCategory?.id}
      items={categoryItems}
      getItems={getCategoryItems}
    ></CategoryResult>
  );
};

export default React.memo(
  connect(
    ({ category }) => ({
      selectedCategory: category.selectedCategory,
      categoryItems: category.categoryItems,
    }),
    {
      getCategoryItems,
      initializeCategoryItems,
    },
  )(CategoryResultContainer),
);
