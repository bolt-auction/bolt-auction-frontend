import React from 'react';
import Store from '../components/Store';
import { connect } from 'react-redux';
import { getProducts, getInfo, getReviews } from '../modules/store';

const StoreContainer = ({ match, user }) => {
  const { id } = match.params;
  const isMyStore = user.store?.id === +id;
  // TODO : store response에 user name포함되어야함
  const name = isMyStore ? user.name : null;

  // FIXME : id랑 name은 info로 대체될 수 있음
  return (
    <Store
      isMyStore={isMyStore}
      id={id}
      name={name}
      getInfo={getInfo}
      getProducts={getProducts}
      getReviews={getReviews}
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
  },
)(StoreContainer);
