import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
! authenticated이 true면 전달받은 Component로 이동, 아니면 SignIn으로 Redirect
*/
function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default AuthRoute;
