import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { productDetail, unloadProductDetail } from '../modules/product';
import ProductDetail from '../components/detail/ProductDetail';
import { deleteItem } from '../lib/api';

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

    const onRemoveProduct = async () => {
      try {
        await deleteItem(itemId);
        console.log('삭제 성공');
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    };

    const ownProduct =
      (userId && userId) === (detail && detail.seller.memberId);

    return (
      <ProductDetail
        detail={detail}
        error={error}
        loading={loading}
        onRemoveProduct={ownProduct && onRemoveProduct}
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
