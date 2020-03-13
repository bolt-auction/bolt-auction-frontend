import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as API from '../lib/api/index';
import moment from 'moment';

/**
 * 현재 시간으로 부터 day의 값만큼 더한 날의 수를 반환
 * @param {number} day - 날의 수
 * @returns {string} 'YYYY-MM-DD[T]HH:mm:ss'
 * @example calEndTime(3); // 2020-03-16T17:00:00
 */
const calEndTime = day =>
  moment()
    .add(day, 'days')
    .format('YYYY-MM-DD[T]HH:mm:ss');

// SECTION : Action Types
const CHANGE_FIELD = 'sell/CHANGE_FIELD';
const INITIALIZE_FORM = 'sell/INITIALIZE_FORM'; // 모든 내용 초기화

const SELL_PRODUCT = 'sell/SELL_PRODUCT';
const SELL_PRODUCT_SUCCESS = 'sell/SELL_PRODUCT_SUCCESS';
const SELL_PRODUCT_FAILURE = 'sell/SELL_PRODUCT_FAILURE';

// SECTION : Action Creators
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initializeForm = createAction(INITIALIZE_FORM);

export const sellProduct = createAction(
  SELL_PRODUCT,
  ({
    categoryId,
    name,
    startPrice,
    quickPrice,
    minBidPrice,
    description,
    endDt,
    images,
  }) => ({
    categoryId,
    name,
    startPrice,
    quickPrice,
    minBidPrice,
    description,
    endDt: calEndTime(endDt),
    images,
  }),
);

// SECTION : 각 action에 대한 saga
const uploadProductSaga = createRequestSaga(SELL_PRODUCT, API.uploadProduct);

// SECTION : rootSaga에 전달할 각 action에 대한 saga
export function* sellSaga() {
  yield takeLatest(SELL_PRODUCT, uploadProductSaga);
}

// SECTION : Initial State
const initialState = {
  sellForm: {
    categoryId: '',
    name: '',
    quickPrice: '',
    startPrice: '',
    minBidPrice: '',
    description: '',
    endDt: '',
    images: [],
  },
  itemId: null,
  error: null,
};

// SECTION : Reducer
const sell = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, draft => {
        draft.sellForm[key] = value;
      }),
    [INITIALIZE_FORM]: state => initialState,
    // [SELL_PRODUCT]: (state, { payload: { sellForm: endDt } }) => ({
    //   ...state,
    //   endDt: calEndTime(endDt),
    // }),
    [SELL_PRODUCT_SUCCESS]: (state, { payload: { itemId } }) => ({
      ...state,
      itemId,
    }),
    [SELL_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default sell;
