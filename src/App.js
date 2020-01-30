import React from 'react';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import { Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route
          render={({ location }) => (
            <div>
              <h2>존재하지 않는 페이지:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
