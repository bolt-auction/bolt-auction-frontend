import { createAction, handleActions } from 'redux-actions';
// import { takeEvery } from 'redux-saga/effects';
// import * as api from '../lib/api';
// import createRequestSaga from '../lib/createRequestSaga';

// Action Types
// 상품명 검색으로 아이템 조회
const GET_ITEM = 'item/GET_ITEM';
const GET_ITEM_SUCCESS = 'item/GET_ITEM_SUCCESS';

// Action Creators
export const getItems = createAction(GET_ITEM, id => id);

// Initial State
const initialState = {};

// Reducer
const item = handleActions({}, initialState);

export default item;
