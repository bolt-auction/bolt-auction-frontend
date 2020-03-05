import { put, select } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
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

// 수정 정보 상태 업데이트
const EDIT_NAME = 'store/EDIT_NAME';
const EDIT_DESC = 'store/EDIT_DESC';
const EDIT_IMAGE = 'store/EDIT_IMAGE';

// 상점 정보 수정하기
const PUT_INFO = 'store/PUT_INFO';
const PUT_INFO_SUCCESS = 'store/PUT_INFO_SUCCESS';
const PUT_INFO_FAILURE = 'store/PUT_INFO_FAILURE';

// SECTION Action Creator
export const getInfo = createAction(GET_INFO, id => id);
export const getProducts = createAction(GET_PRODUCTS, id => id);
export const getReviews = createAction(GET_REVIEWS, id => id);
export const postReview = createAction(POST_REVIEW, (id, content) => ({
  id,
  content,
}));
export const deleteReview = createAction(DELETE_REVIEW, id => id);
export const editName = createAction(EDIT_NAME, name => name);
export const editDesc = createAction(EDIT_DESC, desc => desc);
export const editImage = createAction(EDIT_IMAGE, image => image);
export const putInfo = createAction(PUT_INFO, (id, name, desc, image) => ({
  id,
  name,
  desc,
  image,
}));

//SECTION Action Saga
const getInfoSaga = createRequestSaga(GET_INFO, api.getStoreInfo);
const getProductsSaga = createRequestSaga(GET_PRODUCTS, api.getStoreProducts);
const getReviewsSaga = createRequestSaga(GET_REVIEWS, api.getStoreReviews);
const postReviewSaga = createRequestSaga(POST_REVIEW, api.postStoreReview);
const deleteReviewSaga = createRequestSaga(
  DELETE_REVIEW,
  api.deleteStoreReview,
);
const putInfoSaga = createRequestSaga(PUT_INFO, api.putStoreInfo);
// get review after post successed
const postReviewSuccessSaga = function*() {
  const id = yield select(state => state.store.info.storeId);
  yield put({
    type: GET_REVIEWS,
    payload: id,
  });
};

// rootSaga에 등록할 Saga
export function* storeSaga() {
  yield takeLatest(GET_INFO, getInfoSaga);
  yield takeLatest(GET_PRODUCTS, getProductsSaga);
  yield takeLatest(GET_REVIEWS, getReviewsSaga);
  yield takeLatest(POST_REVIEW, postReviewSaga);
  yield takeLatest(DELETE_REVIEW, deleteReviewSaga);
  yield takeLatest(PUT_INFO, putInfoSaga);
  yield takeLatest(POST_REVIEW_SUCCESS, postReviewSuccessSaga);
}

// Initial State
const initialState = {
  info: [],
  products: [],
  reviews: [],
  editInfo: { name: '', description: '', image: null },
  error: null,
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
      ...state,
      reviews: [],
    }),
    [EDIT_NAME]: (state, action) => ({
      ...state,
      editInfo: { ...state.editInfo, name: action.payload },
    }),
    [EDIT_DESC]: (state, action) => ({
      ...state,
      editInfo: { ...state.editInfo, description: action.payload },
    }),
    [EDIT_IMAGE]: (state, action) => ({
      ...state,
      editInfo: { ...state.editInfo, image: action.payload },
    }),
    [PUT_INFO_SUCCESS]: (state, action) => ({
      ...state,
      error: null,
    }),
    [PUT_INFO_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState,
);

export default store;
