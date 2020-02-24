import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { signout } from '../modules/auth';
import { getItems } from '../modules/item';

const HeaderContainer = ({ signout, getItems }) => {
  return <Header signout={signout} search={getItems} />;
};

export default connect(state => ({}), {
  signout,
  getItems,
})(HeaderContainer);
