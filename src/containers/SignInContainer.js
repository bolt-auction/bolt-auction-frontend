import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signout } from '../modules/auth';
import SignIn from '../components/SignIn';

const SignInContainer = ({ authenticated, signin, location }) => {
  const { from } = location.state || { from: { pathname: '/' } };
  if (authenticated) return <Redirect to={from} />;

  return <SignIn signin={signin} />;
};

export default connect(
  state => ({
    user: state.auth.user,
    authenticated: state.auth.authenticated,
  }),
  {
    signin,
    signout,
  },
)(SignInContainer);
