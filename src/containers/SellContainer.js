import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sell from '../components/sell/Sell';

const SellContainer = withRouter(() => {
  return <Sell />;
});

export default connect(() => ({}), {})(SellContainer);
