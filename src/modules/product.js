import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as API from '../lib/api';

// SECTION : Action Types
const PRODUCT_DETAIL = 'product/PRODUCT_DETAIL';
const PRODUCT_DETAIL_SUCCESS = 'product/PRODUCT_DETAIL_SUCCESS';
const PRODUCT_DETAIL_FAILURE = 'product/PRODUCT_DETAIL_FAILURE';
const UNLOAD_PRODUCT_DETAIL = 'product/UNLOAD_PRODUCT_DETAIL';

// SECTION : Action Creators
export const productDetail = createAction(PRODUCT_DETAIL, itemId => itemId);
export const unloadProductDetail = createAction(UNLOAD_PRODUCT_DETAIL);

// SECTION : 각 action에 대한 saga
const productDetailSaga = createRequestSaga(PRODUCT_DETAIL, API.getItemDetail);

// SECTION : rootSaga에 전달할 각 action에 대한 saga
export function* productSaga() {
  yield takeLatest(PRODUCT_DETAIL, productDetailSaga);
}

// SECTION : Initial State
const initialState = {
  detail: null,
  error: null,
};

// SECTION : Reducer
const product = handleActions(
  {
    [PRODUCT_DETAIL_SUCCESS]: (state, { payload: detail }) => ({
      ...state,
      detail,
    }),
    [PRODUCT_DETAIL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    // 상품상세 페이지에서 벗어날 때 초기화
    [UNLOAD_PRODUCT_DETAIL]: () => initialState,
  },
  initialState,
);

export default product;
