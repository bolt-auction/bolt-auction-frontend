import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getProductDetail,
  getAuctioned,
  getBidList,
  postBid,
  changeBidField,
  unloadProductDetail,
} from '../modules/product';
import { create } from '../modules/chat';
import { deleteItem, postReservedPrice } from '../lib/api';
import ProductDetail from '../components/detail/ProductDetail';

const ProductsDetailContainer = withRouter(
  ({
    match,
    history,
    loading,
    detail,
    detailError,
    auctioned,
    bid,
    bidPrice,
    bidList,
    bidListError,
    userId,
    getProductDetail,
    getBidList,
    getAuctioned,
    changeBidField,
    postBid,
    create,
    unloadProductDetail,
  }) => {
    const { itemId } = match.params;

    const onRemoveProduct = async () => {
      try {
        await deleteItem(itemId);
        console.log('삭제 성공');
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    };

    const onReservedPrice = async () => {
      try {
        await postReservedPrice(itemId);
        alert('즉시낙찰 성공');
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

    const onChatRoomCreate = () => {
      create(`${detail.itemName}`, detail.itemId, auctioned.memberId);
      console.log(`${detail.itemName}`, detail.itemId, auctioned.memberId);
    };

    // useEffect(() => {
    //   if (bid) {
    //     console.log('입찰 성공');
    //     history.go(0);
    //   }
    // }, [bid, history]);

    // 상품 정보, 입찰 리스트 조회
    useEffect(() => {
      getProductDetail(itemId);
      getBidList(itemId);
      // getAuctioned(itemId);
      if (bid) {
        console.log('입찰 성공');
      }
    }, [itemId, getProductDetail, getBidList, getAuctioned, bid]);

    // useEffect(() => {
    //   if (detail?.end) {
    //     getAuctioned(itemId);
    //     console.log('낙찰조회');
    //   }
    // }, [itemId, getAuctioned, detail]);

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
        auctioned={auctioned}
        bidList={bidList}
        bidListError={bidListError}
        bidPrice={bidPrice}
        ownProduct={ownProduct}
        onChatRoomCreate={ownProduct && onChatRoomCreate}
        onRemoveProduct={ownProduct && onRemoveProduct}
        onChangeBidField={onChangeBidField}
        onReservedPrice={onReservedPrice}
        onSubmitBid={onSubmitBid}
      />
    );
  },
);

export default connect(
  ({ product, auth, loading }) => ({
    detail: product.detail,
    detailError: product.detailError,
    auctioned: product.auctioned,
    bid: product.bid,
    bidPrice: product.bidPrice,
    bidList: product.bidList,
    bidListError: product.bidListError,
    userId: auth.user.id,
    loading: loading['product/PRODUCT_DETAIL'],
  }),
  {
    getProductDetail,
    getAuctioned,
    getBidList,
    postBid,
    changeBidField,
    unloadProductDetail,
    create,
  },
)(ProductsDetailContainer);
