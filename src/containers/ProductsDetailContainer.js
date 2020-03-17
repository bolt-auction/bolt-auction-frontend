import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { productDetail, unloadProductDetail } from '../modules/product';
import ProductDetail from '../components/detail/ProductDetail';

const ProductsDetailContainer = withRouter(
  ({
    match,
    history,
    detail,
    error,
    userId,
    loading,
    productDetail,
    unloadProductDetail,
  }) => {
    const { itemId } = match.params;
    useEffect(() => {
      productDetail(itemId);
      return () => {
        unloadProductDetail();
      };
    }, [productDetail, itemId, unloadProductDetail]);

    return (
      <ProductDetail
        detail={detail}
        userId={userId}
        error={error}
        loading={loading}
      />
    );
  },
);

export default React.memo(
  connect(
    ({ product, auth, loading }) => ({
      detail: product.detail,
      error: product.error,
      userId: auth.user.id,
      loading: loading['product/PRODUCT_DETAIL'],
    }),
    {
      productDetail,
      unloadProductDetail,
    },
  )(ProductsDetailContainer),
);
