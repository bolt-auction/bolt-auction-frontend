import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import chat from './chat';
import category, { categorySaga } from './category';
import item, { itemSaga } from './item';
import store, { storeSaga } from './store';

const rootReducer = combineReducers({
  auth,
  chat,
  category,
  item,
  store,
});

export function* rootSaga() {
  yield all([authSaga(), categorySaga(), itemSaga(), storeSaga()]);
}

export default rootReducer;
