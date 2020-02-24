import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import chat from './chat';
import category, { categorySaga } from './category';
import item, { itemSaga } from './item';

const rootReducer = combineReducers({
  auth,
  chat,
  category,
  item,
});

export function* rootSaga() {
  yield all([authSaga(), categorySaga(), itemSaga()]);
}

export default rootReducer;
