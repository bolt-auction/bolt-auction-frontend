import App from './App';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { rootSaga } from './modules';
import { check, tempSetUser } from './modules/auth';
import * as serviceWorker from './serviceWorker';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import dotenv from 'dotenv';
import Moment from 'react-moment';
import 'moment/locale/ko';

dotenv.config();
const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware)),
);

// 앱이 처음 랜더링 될때 localStorage에 user 정보의 유무를 판단
function loadUser() {
  try {
    const user = localStorage.getItem('user'); // 로컬스토리지에 저장된 user 가져오기
    if (!user) return; // user가 없다면 아무것도 안함
    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

Moment.globalLocale = 'ko';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
