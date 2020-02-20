import React from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import {
  getCats,
  activateSub,
  deactivateSub,
  selectCategory,
} from '../modules/category';

const CategoriesContainer = ({
  menu,
  size,
  categories,
  getCats,
  error,
  activeCategory,
  activateSub,
  deactivateSub,
  selectCategory,
}) => {
  return (
    <Categories
      menu={menu}
      categories={categories}
      getCategories={getCats}
      error={error}
      width={size}
      activeId={activeCategory}
      activateId={activateSub}
      deactivateId={deactivateSub}
      selectCategory={selectCategory}
    />
  );
};

export default connect(
  ({ category }) => ({
    categories: category.categories,
    error: category.categoryLoadError,
    activeCategory: category.activeSupCategory,
  }),
  {
    getCats,
    activateSub,
    deactivateSub,
    selectCategory,
  },
)(CategoriesContainer);
