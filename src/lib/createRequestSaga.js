import { put, select, call } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

/**
 *
 * @param {string} type : 처리할 action type - put으로 dispatch
 * @param {function} request : 실행할 request 함수 - call로 비동기 함수 실행
 */
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  // 로그인 API 나오면 다 고쳐야 함!!
  return function*(action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      // 비동기 request가 호출되며 action이 parameter로 전달됨
      const state = yield select(state => state.auth);
      // SIGNIN이 구현이 덜 되어 로직을 분리해놓음
      // SIGNIN API로 구현 시 yield call만 사용할 것
      let response;
      if (type === 'auth/SIGNOUT' || type === 'auth/SIGNIN')
        response = request(state, action.payload);
      else {
        response = yield call(request, action.payload);
      }
      console.log('response', response);
      //성공 action dispatch
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      // 실패 action dispatch
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
