import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Sell from '../components/sell/Sell';
import { changeField, initializeForm, sellProduct } from '../modules/sell';

const SellContainer = withRouter(
  ({ product, sell, changeField, initializeForm, sellProduct }) => {
    const onChange = e => {
      const { value, name } = e.target;
      changeField({
        key: name,
        value,
      });
    };

    const onSubmit = e => {
      e.preventDefault();
      const {
        categoryId,
        name,
        startPrice,
        quickPrice,
        minBidPrice,
        description,
        endDt,
        images,
      } = product;
      sellProduct({
        categoryId,
        name,
        startPrice,
        quickPrice,
        minBidPrice,
        description,
        endDt,
        images,
      });
    };

    useEffect(() => {
      initializeForm();
    }, [initializeForm]);

    return (
      <Sell
        product={product}
        sell={sell}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );
  },
);

export default connect(
  ({ sell }) => ({
    product: sell.product,
  }),
  {
    changeField,
    initializeForm,
    sellProduct,
  },
)(SellContainer);
