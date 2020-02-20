import React from 'react';
import Store from '../components/Store';
import { connect } from 'react-redux';

const StoreContainer = ({ match, user }) => {
  const { id } = match.params;
  const name = user.id === +id ? user.name : null;
  if (!name) return <div>존재하지 않는 사용자.</div>;
  return <Store id={id} name={name} />;
};

export default connect(({ auth }) => ({ user: auth.user }))(StoreContainer);
