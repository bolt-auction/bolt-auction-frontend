import React from 'react';
import Store from '../components/Store';
import { connect } from 'react-redux';
import {
  getProducts,
  getInfo,
  getReviews,
  postReview,
  editName,
  editDesc,
  editImage,
  putInfo,
} from '../modules/store';
import { create } from '../modules/chat';

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
  editInfo,
  editName,
  editDesc,
  editImage,
  putInfo,
  error,
  create,
}) => {
  const { id } = match.params;
  const isMyStore = user.store?.id === +id;

  // FIXME : id랑 name은 info로 대체될 수 있음
  return (
    <Store
      isMyStore={isMyStore}
      id={id}
      user={user}
      info={info}
      products={products}
      reviews={reviews}
      getInfo={getInfo}
      getProducts={getProducts}
      getReviews={getReviews}
      postReview={postReview}
      editInfo={editInfo}
      editName={editName}
      editDesc={editDesc}
      editImage={editImage}
      submitInfo={putInfo}
      error={error}
      createChatroom={create}
    />
  );
};

export default React.memo(
  connect(
    ({ auth, store }) => ({
      user: auth.user,
      info: store.info,
      products: store.products,
      reviews: store.reviews,
      editInfo: store.editInfo,
      error: store.error,
    }),
    {
      getProducts,
      getInfo,
      getReviews,
      postReview,
      editName,
      editDesc,
      editImage,
      putInfo,
      create,
    },
  )(StoreContainer),
);
