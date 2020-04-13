import client from './client';

/**
 * 해당 상품 아이디의 입찰 리스트 조회
 * @param {number} itemId - 상품 아이디
 */
export const getItemBidList = itemId => client.get(`/api/bid/${itemId}`);

/**
 * 해당 상품 아이디에 price의 입찰 등록
 * @param {number} itemId - 상품 아이디
 * @param {number} price - 입찰 가격
 */
export const postBid = ({ itemId, bidPrice }) =>
  client.post(`/api/bid/${itemId}?price=${bidPrice}`);

/**
 * 즉시낙찰가로 해당 상품 낙찰
 * @param {number} itemId - 상품 아이디
 */
export const postReservedPrice = itemId =>
  client.post(`/api/order/quick/${itemId}`);

/**
 * 해당 상품의 낙찰된 유저 조회
 * @param {number} itemId - 상품 아이디
 */
export const getSuccessfulBidUser = itemId =>
  client.get(`/api/order/${itemId}`);
