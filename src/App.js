import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Store from './components/Store';
import SearchResult from './components/SearchResult';
import CategoryResult from './components/CategoryResult';
import ProductDetail from './components/ProductDetail';
import SellProduct from './components/SellProduct';

import { Route, Switch } from 'react-router-dom';

import './App.css';
import { signIn } from './modules/auth';
import AuthRoute from './modules/AuthRoute';

const App = () => {
  const [user, setUser] = useState({});
  /*
    authenticated는 user가 null이 아니면 true인데 일단 메인을 표시하기 위해서
    user에 뭐를 넣어놓겠음
  */
  const authenticated = user != null;

  const signin = ({ email, password }) => setUser(signIn({ email, password }));
  const signout = () => setUser(null);

  return (
    <>
      <Switch>
        {/* <Route path="/" exact component={Main} /> */}
        <AuthRoute
          authenticated={authenticated}
          path="/"
          exact
          component={Main}
        />
        <Route
          path="/signin"
          render={props => (
            <SignIn authenticated={authenticated} signin={signin} {...props} />
          )}
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/store/:id" component={Store} />
        <Route path="/search" component={SearchResult} />
        <Route path="/categories/:category" component={CategoryResult} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/sell" component={SellProduct} />
        <Route
          render={({ location }) => (
            <div>
              <h2>존재하지 않는 페이지:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
