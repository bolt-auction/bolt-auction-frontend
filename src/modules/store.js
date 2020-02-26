import { createAction, handleActions } from 'redux-actions';
import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

// SECTION Action Types
// 상점 정보 가져오기
const GET_INFO = 'store/GET_INFO';
const GET_INFO_SUCCESS = 'store/GET_INFO_SUCCESS';
const GET_INFO_FAILURE = 'store/GET_INFO_FAILURE';

// 상점에 등록된 상품 가져오기
const GET_PRODUCTS = 'store/GET_PRODUCTS';
const GET_PRODUCTS_SUCCESS = 'store/GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_FAILURE = 'store/GET_PRODUCTS_FAILURE';

// 상점에 등록된 리뷰 가져오기
const GET_REVIEWS = 'store/GET_REVIEWS';
const GET_REVIEWS_SUCCESS = 'store/GET_REVIEWS_SUCCESS';
const GET_REVIEWS_FAILURE = 'store/GET_REVIEWS_FAILURE';

// 상점에 리뷰 등록하기
const POST_REVIEW = 'store/POST_REVIEW';
const POST_REVIEW_SUCCESS = 'store/POST_REVIEW_SUCCESS';
const POST_REVIEW_FAILURE = 'store/POST_REVIEW_FAILURE';

// 리뷰 삭제하기
const DELETE_REVIEW = 'store/DELETE_REVIEW';
const DELETE_REVIEW_SUCCESS = 'store/DELETE_REVIEW_SUCCESS';
const DELETE_REVIEW_FAILURE = 'store/DELETE_REVIEW_FAILURE';

// SECTION Action Creator
export const getInfo = createAction(GET_INFO, id => id);
export const getProducts = createAction(GET_PRODUCTS, id => id);
export const getReviews = createAction(GET_REVIEWS, id => id);
export const postReview = createAction(POST_REVIEW, (id, content) => ({
  id,
  content,
}));
export const deleteReview = createAction(DELETE_REVIEW, id => id);

//SECTION Action Saga
const getInfoSaga = createRequestSaga(GET_INFO, api.getStoreInfo);
const getProductsSaga = createRequestSaga(GET_PRODUCTS, api.getStoreProducts);
const getReviewsSaga = createRequestSaga(GET_REVIEWS, api.getStoreReviews);
const postReviewSaga = createRequestSaga(POST_REVIEW, api.postStoreReview);
const deleteReviewSaga = createRequestSaga(
  DELETE_REVIEW,
  api.deleteStoreReview,
);

// rootSaga에 등록할 Saga
export function* storeSaga() {
  yield takeLatest(GET_INFO, getInfoSaga);
  yield takeLatest(GET_PRODUCTS, getProductsSaga);
  yield takeLatest(GET_REVIEWS, getReviewsSaga);
  yield takeLatest(POST_REVIEW, postReviewSaga);
  yield takeLatest(DELETE_REVIEW, deleteReviewSaga);
}

// Initial State
const initialState = {
  info: [],
  products: [],
  reviews: [],
};

// Reducer
const store = handleActions(
  {
    [GET_INFO_SUCCESS]: (state, action) => ({
      ...state,
      info: action.payload,
    }),
    [GET_INFO_FAILURE]: state => ({
      ...state,
      info: [],
    }),
    [GET_PRODUCTS_SUCCESS]: (state, action) => ({
      ...state,
      products: action.payload,
    }),
    [GET_PRODUCTS_FAILURE]: state => ({
      ...state,
      products: [],
    }),
    [GET_REVIEWS_SUCCESS]: (state, action) => ({
      ...state,
      reviews: action.payload,
    }),
    [GET_REVIEWS_FAILURE]: state => ({
      reviews: [],
    }),
  },
  initialState,
);

export default store;
