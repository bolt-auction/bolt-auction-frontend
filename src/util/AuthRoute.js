import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
/*
! authenticated이 true면 전달받은 Component로 이동, 아니면 SignIn으로 Redirect
*/
function AuthRoute({ user, component: Component, render, ...rest }) {
  const authenticated = user !== null;
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default connect(({ auth }) => ({
  user: auth.user,
}))(AuthRoute);
