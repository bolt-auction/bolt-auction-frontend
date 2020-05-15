import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { signout } from '../modules/auth';

const HeaderContainer = ({ user, signout }) => {
  return <Header user={user} signout={signout} />;
};

export default connect(
  ({ auth }) => ({
    user: auth.user,
  }),
  {
    signout,
  },
)(HeaderContainer);
