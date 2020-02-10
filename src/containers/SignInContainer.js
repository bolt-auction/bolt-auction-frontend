import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signout } from '../modules/auth';
import SignIn from '../components/SignIn';

const SignInContainer = ({ authenticated, signin, location, authKey }) => {
  const { from } = location.state || { from: { pathname: '/' } };
  if (authenticated) return <Redirect to={from} />;

  return <SignIn signin={signin} key={authKey} />;
};

export default connect(
  ({ auth }) => ({
    user: auth.user,
    authenticated: auth.authenticated,
    authKey: auth.authKey,
  }),
  {
    signin,
    signout,
  },
)(SignInContainer);
