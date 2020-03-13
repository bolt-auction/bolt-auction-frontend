import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Sell from '../components/sell/Sell';
import { changeField, initializeForm, sellProduct } from '../modules/sell';

const SellContainer = withRouter(
  ({ sellForm, changeField, initializeForm, sellProduct, error }) => {
    const onChange = e => {
      const { value, name, files } = e.target;
      if (files)
        return changeField({
          key: name,
          value: [...files],
        });
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
      } = sellForm;
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

    useEffect(() => {
      if (error) {
        console.log(error);
        return;
      }
    }, [error]);

    return <Sell sellForm={sellForm} onChange={onChange} onSubmit={onSubmit} />;
  },
);

export default connect(
  ({ sell }) => ({
    sellForm: sell.sellForm,
    error: sell.error,
  }),
  {
    changeField,
    initializeForm,
    sellProduct,
  },
)(SellContainer);
