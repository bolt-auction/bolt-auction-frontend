import React from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import { getCats, activateSub, deactivateSub } from '../modules/category';

const CategoriesContainer = ({
  menu,
  size,
  categories,
  getCats,
  error,
  activeCategory,
  activateSub,
  deactivateSub,
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
    />
  );
};

export default connect(
  ({ category }) => ({
    categories: category.categories,
    error: category.error,
    activeCategory: category.activeCategory,
  }),
  {
    getCats,
    activateSub,
    deactivateSub,
  },
)(CategoriesContainer);
