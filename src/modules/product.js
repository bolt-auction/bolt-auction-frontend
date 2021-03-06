import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as API from '../lib/api';

// SECTION : Action Types
const PRODUCT_DETAIL = 'product/PRODUCT_DETAIL';
const PRODUCT_DETAIL_SUCCESS = 'product/PRODUCT_DETAIL_SUCCESS';
const PRODUCT_DETAIL_FAILURE = 'product/PRODUCT_DETAIL_FAILURE';
const UNLOAD_PRODUCT_DETAIL = 'product/UNLOAD_PRODUCT_DETAIL';

const CHANGE_BID_FIELD = 'product/CHANGE_BID_FIELD';

const BID = 'product/BID';
const BID_SUCCESS = 'product/BID_SUCCESS';
const BID_FAILURE = 'product/BID_LIST_FAILURE';

const BID_LIST = 'product/BID_LIST';
const BID_LIST_SUCCESS = 'product/BID_LIST_SUCCESS';
const BID_LIST_FAILURE = 'product/BID_LIST_FAILURE';

const AUCTIONED = 'product/AUCTIONED';
const AUCTIONED_SUCCESS = 'product/AUCTIONED_SUCCESS';
const AUCTIONED_FAILURE = 'product/AUCTIONED_FAILURE';

// SECTION : Action Creators
export const getProductDetail = createAction(PRODUCT_DETAIL, itemId => itemId);
export const unloadProductDetail = createAction(UNLOAD_PRODUCT_DETAIL);
export const changeBidField = createAction(CHANGE_BID_FIELD, value => value);
export const postBid = createAction(BID, ({ itemId, bidPrice }) => ({
  itemId,
  bidPrice,
}));
export const getBidList = createAction(BID_LIST, itemId => itemId);
export const getAuctioned = createAction(AUCTIONED, itemId => itemId);

// SECTION : 각 action에 대한 saga
const productDetailSaga = createRequestSaga(PRODUCT_DETAIL, API.getItemDetail);
const bidSaga = createRequestSaga(BID, API.postBid);
const bidListSaga = createRequestSaga(BID_LIST, API.getItemBidList);
const auctionedSaga = createRequestSaga(AUCTIONED, API.getSuccessfulBidUser);

// SECTION : rootSaga에 전달할 각 action에 대한 saga
export function* productSaga() {
  yield takeLatest(PRODUCT_DETAIL, productDetailSaga);
  yield takeLatest(BID, bidSaga);
  yield takeLatest(BID_LIST, bidListSaga);
  yield takeLatest(AUCTIONED, auctionedSaga);
}

// SECTION : Initial State
const initialState = {
  detail: null,
  detailError: null,
  bidPrice: '',
  bid: null,
  bidError: null,
  bidList: null,
  bidListError: null,
  auctioned: null,
};

// SECTION : Reducer
const product = handleActions(
  {
    [CHANGE_BID_FIELD]: (state, { payload: value }) =>
      produce(state, draft => {
        draft.bidPrice = value;
      }),
    // 상품 정보
    [PRODUCT_DETAIL_SUCCESS]: (state, { payload: detail }) => ({
      ...state,
      detail,
    }),
    [PRODUCT_DETAIL_FAILURE]: (state, { payload: detailError }) => ({
      ...state,
      detailError,
    }),
    // 입찰
    [BID_SUCCESS]: (state, { payload: bid }) => ({
      ...state,
      bid,
      bidPrice: null,
    }),
    [BID_FAILURE]: (state, { payload: bidError }) => ({
      ...state,
      bidError,
    }),
    // 입찰 리스트
    [BID_LIST_SUCCESS]: (
      state,
      {
        payload: {
          _embedded: { bidList },
        },
      },
    ) => ({
      ...state,
      bidList,
    }),
    [BID_LIST_FAILURE]: (state, { payload: bidListError }) => ({
      ...state,
      bidListError,
    }),
    // 낙찰 정보
    [AUCTIONED_SUCCESS]: (state, { payload: auctioned }) => ({
      ...state,
      auctioned,
    }),
    [AUCTIONED_FAILURE]: (state, { payload: auctioned }) => ({
      ...state,
      auctioned,
    }),
    // 상품상세 페이지에서 벗어날 때 초기화
    [UNLOAD_PRODUCT_DETAIL]: () => initialState,
  },
  initialState,
);

export default product;
