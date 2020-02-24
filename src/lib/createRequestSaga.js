import { put, call } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

/**
 *
 * @param {string} type : 처리할 action type - put으로 dispatch
 * @param {function} request : 실행할 request 함수 - call로 비동기 함수 실행
 */
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function*(action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);
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
