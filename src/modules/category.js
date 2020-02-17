import { createAction, handleActions } from 'redux-actions';
import { takeEvery } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

// Action Types
const GET_CATS = 'category/GET_CATS';
const GET_CATS_SUCCESS = 'category/GET_CATS_SUCCESS';
const GET_CATS_FAILURE = 'category/GET_CATS_FAILURE';

// Action Creators
export const getCats = createAction(GET_CATS);

// Acttion Saga
const getCatsSaga = createRequestSaga(GET_CATS, api.getCategories);

// rootSaga에 전달할 Saga
export function* categorySaga() {
  yield takeEvery(GET_CATS, getCatsSaga);
}

// Initial State
const initialState = {
  categories: [],
  error: false,
};

// Reducer
const category = handleActions(
  {
    [GET_CATS_SUCCESS]: (state, action) => ({
      ...state,
      categories: action.payload,
      error: false,
    }),
    [GET_CATS_FAILURE]: (state, action) => ({
      ...state,
      error: true,
    }),
  },
  initialState,
);

export default category;
