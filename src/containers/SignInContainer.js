import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin } from '../modules/auth';
import SignIn from '../components/SignIn';

const SignInContainer = ({ user, signin, location }) => {
  const { from } = location.state || { from: { pathname: '/' } };
  const authenticated = user !== null;
  if (authenticated) return <Redirect to={from} />;

  return <SignIn signin={signin} />;
};

export default connect(
  ({ auth }) => ({
    user: auth.user,
  }),
  {
    signin,
  },
)(SignInContainer);
