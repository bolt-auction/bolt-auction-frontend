import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as API from '../lib/api/index';
import createRequestSaga from '../lib/createRequestSaga';
import produce from 'immer';

/**
 * NOTE:
 * 처음 user를 분리해서 구현했었지만 인증 절차에서 받아오는 정보이니
 * 분리할 필요까지 없는것 같다는 의견을 수렴해 auth하나로 구현했으나
 * user를 다시 분리하는 것을 고려해봐야 할 것 같다.
 */

// SECTION : Action Types
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const SIGNUP = 'auth/SIGNUP';
const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE';

const SIGNIN = 'auth/SIGNIN';
const SIGNIN_SUCCESS = 'auth/SIGNIN_SUCCESS';
const SIGNIN_FAILURE = 'auth/SIGNIN_FAILURE';

const TEMP_SET_USER = 'auth/TEMP_SET_USER';

const CHECK = 'auth/CHECK';
const CHECK_SUCCESS = 'auth/CHECK_SUCCESS';
const CHECK_FAILURE = 'auth/CHECK_FAILURE';

const SIGNOUT = 'auth/SIGNOUT';

// SECTION : Action Creators
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // signin | signup
    key, // uid | passwd | passwdConfirm
    value, // 실제 바꾸려는 값
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // signin | signup

export const signup = createAction(SIGNUP, ({ uid, passwd, name }) => ({
  uid,
  passwd,
  name,
}));
export const signin = createAction(SIGNIN, ({ uid, passwd }) => ({
  uid,
  passwd,
}));

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const signout = createAction(SIGNOUT);

// SECTION : 각 action에 대한 saga
const signupSaga = createRequestSaga(SIGNUP, API.signup);
const signinSaga = createRequestSaga(SIGNIN, API.signin);
const checkSaga = createRequestSaga(CHECK, API.check);
function signoutSaga() {
  try {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  } catch (e) {
    console.log('localStorage is not working');
  }
}

// SECTION : rootSaga에 전달할 각 action에 대한 saga
export function* authSaga() {
  yield takeLatest(SIGNUP, signupSaga);
  yield takeLatest(SIGNIN, signinSaga);
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, signoutSaga);
  yield takeLatest(SIGNOUT, signoutSaga);
}

// SECTION : Initial State
const initialState = {
  signup: {
    uid: '',
    passwd: '',
    passwdConfirm: '',
    name: '',
  },
  signin: {
    uid: '',
    passwd: '',
  },
  auth: null,
  authError: null,
  user: null,
  checkError: null,
};

// SECTION : Reducer
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    // 회원가입 성공
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 회원가입 실패
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [SIGNIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 로그인 실패
    [SIGNIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 새로고침 이후 임시 로그인 처리
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    // 유저 정보확인 성공
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    // 유저 정보확인 실패
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    // 로그아웃
    [SIGNOUT]: state => ({
      ...state,
      auth: null,
      user: null,
    }),
  },
  initialState,
);

export default auth;
