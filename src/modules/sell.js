import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as API from '../lib/api/index';

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
    endDt,
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
  error: null,
};

// SECTION : Reducer
const sell = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, draft => {
        draft.sellForm[key] = value;
      }),
    [INITIALIZE_FORM]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
    [SELL_PRODUCT_SUCCESS]: (state, { payload: sellForm }) => ({
      ...state,
      sellForm,
    }),
    [SELL_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default sell;
