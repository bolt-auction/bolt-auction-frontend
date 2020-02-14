import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import chat from './chat';

const rootReducer = combineReducers({
  auth,
  chat,
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;