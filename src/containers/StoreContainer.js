import React, { useEffect } from 'react';
import Store from '../components/store/Store';
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
  editFile,
  unloadStore,
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
  editFile,
  editImage,
  putInfo,
  error,
  create,
  unloadStore,
}) => {
  const { id } = match.params;
  const isMyStore = user.id === +id;

  useEffect(() => {
    return () => {
      unloadStore();
    };
  }, [unloadStore]);

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
      editFile={editFile}
      editImage={editImage}
      submitInfo={putInfo}
      error={error}
      createChatroom={create}
    />
  );
};

export default connect(
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
    editFile,
    editImage,
    putInfo,
    create,
    unloadStore,
  },
)(StoreContainer);
