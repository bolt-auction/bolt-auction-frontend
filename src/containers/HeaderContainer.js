import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { signout } from '../modules/auth';

const HeaderContainer = ({ signout }) => {
  return <Header signout={signout} />;
};

export default connect(state => ({}), {
  signout,
})(HeaderContainer);
