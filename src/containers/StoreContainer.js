import React from 'react';
import Store from '../components/Store';
import { connect } from 'react-redux';
import { getProducts, getInfo, getReviews, postReview } from '../modules/store';

const StoreContainer = ({
  match,
  user,
  info,
  products,
  reviews,
  getProducts,
  getInfo,
  getReviews,
  postReview,
}) => {
  const { id } = match.params;
  const isMyStore = user.store?.id === +id;

  // FIXME : id랑 name은 info로 대체될 수 있음
  return (
    <Store
      isMyStore={isMyStore}
      id={id}
      info={info}
      products={products}
      reviews={reviews}
      getInfo={getInfo}
      getProducts={getProducts}
      getReviews={getReviews}
      postReview={postReview}
    />
  );
};

export default connect(
  ({ auth, store }) => ({
    user: auth.user,
    info: store.info,
    products: store.products,
    reviews: store.reviews,
  }),
  {
    getProducts,
    getInfo,
    getReviews,
    postReview,
  },
)(StoreContainer);
