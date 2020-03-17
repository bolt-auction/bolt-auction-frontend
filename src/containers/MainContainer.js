import React from 'react';
import Main from '../components/Main';
import { connect } from 'react-redux';
import { getCategoryItems } from '../modules/category';

const MainContainer = ({ categoryItems, getCategoryItems }) => {
  return <Main items={categoryItems} getItems={getCategoryItems} />;
};

export default connect(
  ({ category }) => ({
    categoryItems: category.categoryItems,
  }),
  {
    getCategoryItems,
  },
)(MainContainer);
