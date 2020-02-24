import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer, { rootSaga } from './modules';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import dotenv from 'dotenv';
import { tempSetUser, check } from './modules/auth';

dotenv.config();
const logger = createLogger();
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

store.subscribe(() => console.log('state updated'));
sagaMiddleware.run(rootSaga);
loadUser();

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
