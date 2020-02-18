import React from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import { getCats } from '../modules/category';

const CategoriesContainer = ({ menu, size, categories, getCats, error }) => {
  return (
    <Categories
      menu={menu}
      categories={categories}
      getCategories={getCats}
      error={error}
      width={size}
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
