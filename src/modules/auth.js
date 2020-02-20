import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

/*
02.11.20
1. SIGNIN action 발생
2. createRequestSaga의 Generator 함수 내부 로직에 따라서 api.requsetFunction이 실행된다.
(이 때 redux-saga의 select로 현재 redux의 state와 action.payload를 전달할 수 있다.)
3. api.requestFuncton 성공 시 SIGNIN_SUCCESS action이 발생하고 auth 리듀서에서 새로운 state를 생성한다.

SIGNOUT action도 마찬가지로 동작한다.
witten by. 수빈
*/

// Action Types
const SIGNIN = 'auth/SIGNIN';
const SIGNIN_SUCCESS = 'auth/SIGNIN_SUCCESS';

const SIGNOUT = 'auth/SIGNOUT';
const SIGNOUT_SUCCESS = 'auth/SIGNOUT_SUCCESS';

// Action Creators
export const signin = createAction(SIGNIN, (email, password) => ({
  email,
  password,
}));
export const signout = createAction(SIGNOUT);

// 각 action에 대한 saga
const siginInSaga = createRequestSaga(SIGNIN, api.setToken);
const signOutSaga = createRequestSaga(SIGNOUT, api.removeToken);

// rootSaga에 전달할 각 action에 대한 saga
export function* authSaga() {
  yield takeLatest(SIGNIN, siginInSaga);
  yield takeLatest(SIGNOUT, signOutSaga);
}

// Fake Data
const users = [
  { email: 'subin', password: '1234', name: '수빈', id: 21 },
  { email: 'jisop', password: '1234', name: '지섭', id: 21 },
];

// localStorage Key
const authKey = 'User';

// Initial State
const initialState = {
  users,
  authKey,
  user: JSON.parse(localStorage.getItem(authKey)),
};

// Reducer
const auth = handleActions(
  {
    [SIGNIN_SUCCESS]: (state, action) => ({
      ...state,
      user: action.payload.user,
    }),
    [SIGNOUT_SUCCESS]: (state, action) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);

export default auth;
