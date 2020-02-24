import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { signout } from '../modules/auth';
import { getItems } from '../modules/item';

const HeaderContainer = ({ user, signout, getItems }) => {
  return <Header user={user} signout={signout} search={getItems} />;
};

export default connect(
  ({ auth }) => ({
    user: auth.user,
  }),
  {
    signout,
    getItems,
  },
)(HeaderContainer);
