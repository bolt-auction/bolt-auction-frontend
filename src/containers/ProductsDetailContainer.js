import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getProductDetail,
  changeBidField,
  postBid,
  getBidList,
  unloadProductDetail,
} from '../modules/product';
import ProductDetail from '../components/detail/ProductDetail';
import { deleteItem } from '../lib/api';

const ProductsDetailContainer = withRouter(
  ({
    match,
    history,
    userId,
    loading,
    detail,
    detailError,
    bidList,
    bidPrice,
    bid,
    bidListError,
    getProductDetail,
    getBidList,
    changeBidField,
    postBid,
    unloadProductDetail,
  }) => {
    const { itemId } = match.params;

    // 상품 정보, 입찰 리스트 조회
    useEffect(() => {
      getProductDetail(itemId);
      getBidList(itemId);
      if (bid) {
        console.log('입찰 성공');
      }
    }, [itemId, getProductDetail, getBidList, bid]);

    const onRemoveProduct = async () => {
      try {
        await deleteItem(itemId);
        console.log('삭제 성공');
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    };

    const onChangeBidField = e => {
      const { value } = e.target;
      changeBidField(value);
    };

    const onSubmitBid = e => {
      e.preventDefault();
      postBid({ itemId, bidPrice });
    };

    // useEffect(() => {
    //   if (bid) {
    //     console.log('입찰 성공');
    //     history.go(0);
    //   }
    // }, [bid, history]);
    useEffect(() => {
      return () => {
        unloadProductDetail();
      };
    }, [unloadProductDetail]);

    const ownProduct =
      (userId && userId) === (detail && detail.seller.memberId);

    return (
      <ProductDetail
        loading={loading}
        detail={detail}
        detailError={detailError}
        bidList={bidList}
        bidListError={bidListError}
        bidPrice={bidPrice}
        onRemoveProduct={ownProduct && onRemoveProduct}
        onChangeBidField={onChangeBidField}
        onSubmitBid={onSubmitBid}
      />
    );
  },
);

export default React.memo(
  connect(
    ({ product, auth, loading }) => ({
      detail: product.detail,
      detailError: product.detailError,
      bidPrice: product.bidPrice,
      bid: product.bid,
      bidList: product.bidList,
      bidListError: product.bidListError,
      userId: auth.user.id,
      loading: loading['product/PRODUCT_DETAIL'],
    }),
    {
      getProductDetail,
      changeBidField,
      postBid,
      getBidList,
      unloadProductDetail,
    },
  )(ProductsDetailContainer),
);
