import React from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import { getCats } from '../modules/category';

const CategoriesContainer = ({ menu, categories, getCats, error }) => {
  return (
    <Categories
      menu={menu}
      categories={categories}
      getCategories={getCats}
      error={error}
    />
  );
};

export default connect(
  ({ category }) => ({
    categories: category.categories,
    error: category.error,
  }),
  {
    getCats,
  },
)(CategoriesContainer);
