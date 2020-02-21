import React from 'react';
import CategoryResult from '../components/CategoryResult';
import { connect } from 'react-redux';
import { getCategoryItems } from '../modules/category';

const CategoryResultContainer = ({
  match,
  location,
  selectedCategory,
  categoryItems,
  getCategoryItems,
}) => {
  return (
    <CategoryResult
      match={match}
      location={location}
      id={selectedCategory?.id}
      items={categoryItems}
      getItems={getCategoryItems}
    ></CategoryResult>
  );
};

export default connect(
  ({ category }) => ({
    selectedCategory: category.selectedCategory,
    categoryItems: category.categoryItems,
  }),
  {
    getCategoryItems,
  },
)(CategoryResultContainer);
