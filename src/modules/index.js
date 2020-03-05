import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import chat, { chatSaga } from './chat';
import category, { categorySaga } from './category';
import item, { itemSaga } from './item';
import store, { storeSaga } from './store';
import product, { productSaga } from './product';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  chat,
  category,
  item,
  store,
  product,
  loading,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    categorySaga(),
    itemSaga(),
    storeSaga(),
    productSaga(),
    chatSaga(),
  ]);
}

export default rootReducer;
