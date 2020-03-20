import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getProductDetail,
  getBidList,
  unloadProductDetail,
} from '../modules/product';
import ProductDetail from '../components/detail/ProductDetail';
import { deleteItem } from '../lib/api';

const ProductsDetailContainer = withRouter(
  ({
    match,
    history,
    detail,
    detailError,
    bidList,
    bidListError,
    userId,
    loading,
    getProductDetail,
    getBidList,
    unloadProductDetail,
  }) => {
    const { itemId } = match.params;

    useEffect(() => {
      getProductDetail(itemId);
      return () => {
        unloadProductDetail();
      };
    }, [itemId, getProductDetail, unloadProductDetail]);

    useEffect(() => {
      getBidList(itemId);
    }, [itemId, getBidList]);

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
        detailError={detailError}
        bidList={bidList}
        bidListError={bidListError}
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
      detailError: product.detailError,
      bidList: product.bidList,
      bidListError: product.bidListError,
      userId: auth.user.id,
      loading: loading['product/PRODUCT_DETAIL'],
    }),
    {
      getProductDetail,
      getBidList,
      unloadProductDetail,
    },
  )(ProductsDetailContainer),
);
