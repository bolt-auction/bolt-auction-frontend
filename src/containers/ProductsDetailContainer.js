import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductDetail from '../components/detail/ProductDetail';

const ProductsDetailContainer = withRouter(() => {
  return <ProductDetail />;
});

export default connect(() => ({}), {})(ProductsDetailContainer);
